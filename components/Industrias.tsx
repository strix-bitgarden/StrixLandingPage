import {
  Soup,
  Sparkles,
  Bike,
  Stethoscope,
  ShoppingBasket,
  Wrench,
} from "lucide-react";

const INDUSTRIES = [
  {
    img: "/assets/img/industria-gastronomia.jpg",
    icon: Soup,
    iconBg: "#ffedd5",
    iconColor: "#c2410c",
    title: "Gastronomía",
    text: "Cafés, restaurantes, bares, panaderías",
  },
  {
    img: "/assets/img/industria-belleza.jpg",
    icon: Sparkles,
    iconBg: "#fce7f3",
    iconColor: "#be185d",
    title: "Belleza",
    text: "Peluquerías, centros de estética, salones",
  },
  {
    img: "/assets/img/industria-deporte.jpg",
    icon: Bike,
    iconBg: "#fff5d6",
    iconColor: "#a16207",
    title: "Deporte",
    text: "Gimnasios, canchas, espacios de fitness",
  },
  {
    img: "/assets/img/industria-salud.jpg",
    icon: Stethoscope,
    iconBg: "#dcfce7",
    iconColor: "#15803d",
    title: "Salud",
    text: "Farmacias, veterinarias, consultorios",
  },
  {
    img: "/assets/img/industria-retail.jpg",
    icon: ShoppingBasket,
    iconBg: "#fee2e2",
    iconColor: "#b91c1c",
    title: "Retail",
    text: "Tiendas, boutiques, negocios de barrio",
  },
  {
    img: "/assets/img/industria-servicios.jpg",
    icon: Wrench,
    iconBg: "#ede9fe",
    iconColor: "#6d28d9",
    title: "Servicios",
    text: "Lavanderías, talleres, cualquier servicio recurrente",
  },
];

export default function Industrias() {
  return (
    <section className="section-fade" id="industrias">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Industrias</div>
          <h2 className="section-title">
            Los fans no son solo de marcas globales.
          </h2>
          <p className="section-desc">
            Cualquier negocio donde el cliente puede volver tiene potencial de
            fidelización. La diferencia está en si lo trabajás o lo dejás al
            azar.
          </p>
        </div>
        <div className="industrias-grid">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div className="ind-card" key={ind.title}>
                <img src={ind.img} alt={ind.title} loading="lazy" />
                <div className="ind-body">
                  <div
                    className="ind-icon"
                    style={{ background: ind.iconBg, color: ind.iconColor }}
                  >
                    <Icon className="icon" />
                  </div>
                  <div>
                    <h3>{ind.title}</h3>
                    <p>{ind.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
