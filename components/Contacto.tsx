"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

type Status = { text: string; kind: "idle" | "error" | "success" };

const DEFAULT_NOTE: Status = {
  text: "Sin spam. Tu info solo se usa para contactarte.",
  kind: "idle",
};

export default function Contacto() {
  const [status, setStatus] = useState<Status>(DEFAULT_NOTE);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      industry: String(fd.get("industry") || ""),
      business: String(fd.get("business") || ""),
      message: String(fd.get("message") || ""),
      company_website: String(fd.get("company_website") || ""),
    };

    setSending(true);
    setStatus({ text: "Enviando...", kind: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (res.ok && body.ok) {
        setStatus({
          text: "¡Gracias! Te vamos a contactar a la brevedad.",
          kind: "success",
        });
        form.reset();
      } else {
        setStatus({
          text: body.error || "No se pudo enviar. Probá de nuevo.",
          kind: "error",
        });
      }
    } catch {
      setStatus({
        text: "No se pudo enviar. Revisá tu conexión e intentá de nuevo.",
        kind: "error",
      });
    } finally {
      setSending(false);
    }
  }

  const noteClass =
    status.kind === "error"
      ? "submit-note is-error"
      : status.kind === "success"
        ? "submit-note is-success"
        : "submit-note";

  return (
    <section className="contacto" id="contacto">
      <div className="blob" />
      <div className="container contact-layout">
        <div>
          <div className="eyebrow">Contacto</div>
          <h2 className="section-title">
            Empezá a construir tu comunidad de fans.
          </h2>
          <p className="section-desc">
            Contanos sobre tu negocio. Te mostramos cómo funciona strix en tu
            rubro y si tiene sentido para lo que querés lograr. Sin presión.
          </p>
          <div className="check-list">
            {[
              "Respuesta en menos de 24hs hábiles",
              "Demo personalizada a tu industria",
              "Sin contrato de permanencia",
            ].map((t) => (
              <div className="check-item" key={t}>
                <span className="dot">
                  <Check style={{ width: 14, height: 14 }} className="icon" />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
            Ponete en contacto
          </h3>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="company_website"
              className="hp-field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="field">
              <label htmlFor="f-name">Nombre</label>
              <input
                id="f-name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input
                id="f-email"
                name="email"
                type="email"
                placeholder="hola@tu-negocio.com"
                required
              />
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-phone">Teléfono</label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  placeholder="+598 09X XXX XXX"
                />
              </div>
              <div className="field">
                <label htmlFor="f-industry">Industria</label>
                <select id="f-industry" name="industry" defaultValue="">
                  <option value="">Tu rubro</option>
                  <option>Gastronomía</option>
                  <option>Belleza</option>
                  <option>Deporte</option>
                  <option>Salud</option>
                  <option>Retail</option>
                  <option>Servicios</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-business">Nombre del negocio</label>
              <input
                id="f-business"
                name="business"
                type="text"
                placeholder="¿Cómo se llama tu negocio?"
              />
            </div>
            <div className="field">
              <label htmlFor="f-goal">¿Qué querés lograr?</label>
              <textarea
                id="f-goal"
                name="message"
                placeholder="Contanos brevemente tu situación y qué objetivos tenés..."
              />
            </div>
            <button
              type="submit"
              className="btn btn-solid"
              style={{ marginTop: 6 }}
              disabled={sending}
            >
              Enviar mensaje{" "}
              <Send style={{ width: 14, height: 14 }} className="icon" />
            </button>
            <p className={noteClass}>{status.text}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
