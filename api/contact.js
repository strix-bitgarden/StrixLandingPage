const TO_EMAIL = 'info@strix.fan';
const FROM_EMAIL = 'strix <noreply@strix.fan>';

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const { name, email, phone, industry, business, message, company_website } = req.body || {};

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (company_website) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email) {
    res.status(400).json({ ok: false, error: 'Nombre y email son obligatorios.' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ ok: false, error: 'Servidor mal configurado: falta RESEND_API_KEY.' });
    return;
  }

  const html = `
    <h2>Nuevo contacto desde strix landing</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone) || '—'}</p>
    <p><strong>Industria:</strong> ${escapeHtml(industry) || '—'}</p>
    <p><strong>Negocio:</strong> ${escapeHtml(business) || '—'}</p>
    <p><strong>Mensaje:</strong><br>${escapeHtml(message) || '—'}</p>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nuevo contacto: ${name}${business ? ' — ' + business : ''}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend error:', resendRes.status, errBody);
      res.status(502).json({ ok: false, error: 'No se pudo enviar el mensaje. Intentá de nuevo.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ ok: false, error: 'No se pudo enviar el mensaje. Intentá de nuevo.' });
  }
};
