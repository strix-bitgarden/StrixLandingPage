"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  {
    q: "¿Necesito integrar mi sistema de caja o POS?",
    a: "No. strix funciona de forma independiente — no requiere integración con tu POS actual.",
  },
  {
    q: "¿Mis clientes tienen que descargar una app?",
    a: "Los clientes acceden desde el navegador de su celular — sin descarga, sin fricción. Pueden elegir agregar el acceso directo a su pantalla de inicio para mayor comodidad.",
  },
  {
    q: "¿En qué se diferencia strix de otras opciones del mercado?",
    a: "Cada sello se valida contra una compra real vía QR de factura — no se puede acumular sin haber comprado, a diferencia de los sistemas de sellos manuales.",
  },
  {
    q: "¿Cuánto tiempo lleva configurar todo?",
    a: "Menos de cinco minutos: elegís cuántas visitas necesita la tarjeta, subís tu logo y ya podés empezar a sumar sellos.",
  },
  {
    q: "¿Qué pasa con los datos de mis clientes?",
    a: "Los datos son tuyos. strix los usa únicamente para que vos puedas identificar y premiar a tus mejores clientes.",
  },
];

function AccordionItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useLayoutEffect(() => {
    setMaxHeight(open ? `${panelRef.current?.scrollHeight ?? 0}px` : "0px");
  }, [open]);

  return (
    <div className={`acc-item${open ? " open" : ""}`}>
      <button className="acc-trigger" onClick={onToggle} aria-expanded={open}>
        <ChevronDown className="icon" />
        <span>{q}</span>
      </button>
      <div className="acc-panel" ref={panelRef} style={{ maxHeight }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Preguntas frecuentes</div>
          <h2 className="section-title">Lo que nos suelen preguntar.</h2>
        </div>
        <div className="faq-layout">
          <div className="accordion">
            {ITEMS.map((item, i) => (
              <AccordionItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="faq-visual">
            <div className="phone-frame">
              <div className="phone-screen">
                <img src="/assets/img/el-garaje.png" alt="App strix — El Garaje" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
