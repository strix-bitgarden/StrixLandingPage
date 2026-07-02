import { BellRing, Bell, MessageCircle, Mail, MailOpen } from "lucide-react";

export default function Canales() {
  return (
    <section className="canales" id="canales">
      <div className="blob" />
      <div className="container">
        <div className="section-head on-dark">
          <div className="eyebrow">Canales</div>
          <h2 className="section-title">
            Tres canales para llegar cuando{" "}
            <span style={{ color: "var(--indigo)" }}>tiene sentido.</span>
          </h2>
          <p className="section-desc">
            No se trata de mandar mensajes — se trata de mandar el mensaje
            correcto, al cliente correcto, en el momento correcto.
          </p>
        </div>
        <div className="cards-3">
          <div className="ch-card">
            <div className="ch-top">
              <div className="ch-icon">
                <BellRing style={{ width: 32, height: 32 }} className="icon" />
              </div>
              <div>
                <h3>Push Notifications</h3>
                <p>
                  Para los momentos del día que vos manejás. Una promo de último
                  momento, un recordatorio antes del cierre, un &quot;hoy tenemos
                  X&quot;. Rápido y directo.
                </p>
              </div>
            </div>
            <div className="ch-quote">
              <Bell style={{ width: 16, height: 16 }} className="icon" />
              <span>
                &quot;¡Hoy sellos x2 de 12 a 15hs! Pasá y aprovechá 🔥&quot;
              </span>
            </div>
          </div>

          <div className="ch-card">
            <div className="ch-top">
              <div className="ch-icon" style={{ color: "#25D366" }}>
                <MessageCircle
                  style={{ width: 32, height: 32 }}
                  className="icon"
                />
              </div>
              <div>
                <h3>WhatsApp</h3>
                <p>
                  El canal más personal que tenés. Úsalo con criterio — para el
                  cliente que no vino en dos semanas, el que está a un sello de su
                  premio, o el que cumple años esta semana. Cuando llega bien, se
                  nota.
                </p>
              </div>
            </div>
            <div className="ch-quote">
              <MessageCircle
                style={{ width: 16, height: 16 }}
                className="icon"
              />
              <span>
                &quot;Te extrañamos, Valentina. Volvé esta semana y te regalamos
                un sello extra 🎁&quot;
              </span>
            </div>
          </div>

          <div className="ch-card">
            <div className="ch-top">
              <div className="ch-icon">
                <Mail style={{ width: 32, height: 32 }} className="icon" />
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  Para cuando tenés algo que vale la pena contar con más espacio.
                  Novedades del negocio, recompensas disponibles, un
                  agradecimiento a tus clientes más fieles.
                </p>
              </div>
            </div>
            <div className="ch-quote">
              <MailOpen style={{ width: 16, height: 16 }} className="icon" />
              <span>
                &quot;Completaste tu tarjeta 🎉 Tu café gratis te está esperando
                esta semana.&quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
