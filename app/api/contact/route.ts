import { NextResponse } from "next/server";

const TO_EMAIL = "info@strix.fan";
const FROM_EMAIL = "strix <noreply@strix.fan>";

function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo de la petición inválido." },
      { status: 400 },
    );
  }

  const { name, email, phone, industry, business, message, company_website } =
    payload;

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Nombre y email son obligatorios." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "Servidor mal configurado: falta RESEND_API_KEY." },
      { status: 500 },
    );
  }

  const html = `
    <h2>Nuevo contacto desde strix landing</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone) || "—"}</p>
    <p><strong>Industria:</strong> ${escapeHtml(industry) || "—"}</p>
    <p><strong>Negocio:</strong> ${escapeHtml(business) || "—"}</p>
    <p><strong>Mensaje:</strong><br>${escapeHtml(message) || "—"}</p>
  `;

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nuevo contacto: ${name}${business ? " — " + business : ""}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Resend error:", resendRes.status, errBody);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el mensaje. Intentá de nuevo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje. Intentá de nuevo." },
      { status: 500 },
    );
  }
}
