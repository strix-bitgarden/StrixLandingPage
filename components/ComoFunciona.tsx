import { Palette, ScanLine, Gift, LineChart } from "lucide-react";

const STEPS = [
  {
    icon: Palette,
    num: "01",
    title: "Armás tu tarjeta",
    text: "Elegís cuántas visitas necesita tu cliente para ganarse el premio. Ponés tu logo y listo en menos de cinco minutos.",
  },
  {
    icon: ScanLine,
    num: "02",
    title: "El cliente escanea",
    text: "Cada vez que vuelve, escanea el QR de su ticket y el sello queda registrado. Ponés tu logo y listo en menos de cinco minutos.",
  },
  {
    icon: Gift,
    num: "03",
    title: "Premiás cuando importa",
    text: "Al completar la tarjeta recibe su recompensa. Pero también podés mandarle un regalo antes de que lo espere — ese tipo de gesto no se olvida.",
  },
  {
    icon: LineChart,
    num: "04",
    title: "Ves quién es quién",
    text: "El dashboard te muestra quiénes vienen seguido, cuánto gastan y hace cuánto no aparecen. Con eso decidís a quién premiar y cuándo mover el juego.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="section-fade" id="como-funciona">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Cómo funciona</div>
          <h2 className="section-title">Configurás una vez. Funciona solo.</h2>
          <p className="section-desc">
            No hay hardware que instalar ni caja que integrar. El cliente paga,
            escanea el QR de su factura y el sello queda registrado. Vos ves todo
            desde el panel.
          </p>
        </div>
        <div className="steps-grid">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div className="step-card" key={s.num}>
                <div className="step-top">
                  <div className="step-icon">
                    <Icon className="icon" />
                  </div>
                  <span className="step-num">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
