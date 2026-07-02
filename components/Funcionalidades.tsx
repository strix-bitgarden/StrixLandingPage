import { QrCode, Zap, Crown, AreaChart, Gift } from "lucide-react";

const FEATURES = [
  {
    icon: QrCode,
    title: "Sellos por QR de factura",
    text: "El cliente escanea el QR de su ticket y el sello queda registrado. No hay forma de acumular sin haber comprado — cada sello es real.",
  },
  {
    icon: Zap,
    title: "Multiplicadores de sellos",
    text: "¿El miércoles flojo? Activás sellos dobles para ese día y listo. También podés usarlo en fechas especiales o para empujar un producto puntual.",
  },
  {
    icon: Crown,
    title: "Tus 10 mejores clientes",
    text: "Sabés quiénes son. Podés mandarles un regalo directo, pasarlos a VIP o pedirles feedback privado. Eso es lo que los hace sentir parte de algo — y lo que los convierte en fans.",
  },
  {
    icon: AreaChart,
    title: "Panel de actividad",
    text: "Frecuencia de visita, ticket promedio, horarios pico, clientes que no volvieron. No son métricas de vanidad — son datos para tomar decisiones esta semana.",
  },
  {
    icon: Gift,
    title: "Canjes que no se falsifican",
    text: "Cada premio genera un QR de uso único. Tu equipo lo verifica desde el panel en segundos y queda registrado. Sin papel, sin discusiones.",
  },
];

export default function Funcionalidades() {
  return (
    <section className="feat-section">
      <div className="feat-blob" />
      <div className="container feat-grid">
        <div>
          <div className="eyebrow">Funcionalidades</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Las herramientas para que vuelvan siempre.
          </h2>
          <div className="feat-list">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div className="feat-item" key={f.title}>
                  <div className="feat-icon">
                    <Icon className="icon" />
                  </div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="feat-shot">
          <img
            src="/assets/img/dashboard-screenshot.png"
            alt="Panel de actividad de strix"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
