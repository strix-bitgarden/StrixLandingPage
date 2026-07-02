import { ChevronRight, Instagram, MessageCircle } from "lucide-react";

const EXPLORE = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#canales", label: "Canales" },
  { href: "#industrias", label: "Industrias" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo">
            stri
            <span className="x" style={{ color: "var(--indigo-light)" }}>
              x
            </span>
          </span>
          <span
            className="eyebrow-badge"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,.4)",
              margin: "14px 0",
              display: "inline-flex",
            }}
          >
            Plataforma de fidelización · Uruguay
          </span>
          <p className="footer-tagline">
            Los negocios que crecen convierten clientes en{" "}
            <span className="accent">Fans</span>
          </p>
          <p className="footer-fine">
            Hecho en Uruguay — © 2026 Strix App. Todos los derechos reservados.
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Explora</h4>
            {EXPLORE.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a
              href="#contacto"
              className="btn btn-dark"
              style={{ marginBottom: 14 }}
            >
              Empezá ahora{" "}
              <ChevronRight
                style={{ width: 14, height: 14 }}
                className="icon"
              />
            </a>
            <a href="mailto:info@strix.fan">info@strix.fan</a>
            <div className="social-row">
              <a href="#" aria-label="Instagram">
                <Instagram style={{ width: 18, height: 18 }} className="icon" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircle
                  style={{ width: 18, height: 18 }}
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
