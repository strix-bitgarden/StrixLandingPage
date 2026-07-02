"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const SLIDES = [
  "/assets/img/header-club.jpg",
  "/assets/img/header-cafe.jpg",
  "/assets/img/header-bar.jpg",
];

const PHONES = [
  { src: "/assets/img/padel-club.png", alt: "App strix — Padel Club" },
  { src: "/assets/img/coffee-cv.png", alt: "App strix — Coffee CV" },
  { src: "/assets/img/el-garaje.png", alt: "App strix — El Garaje" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-slides">
          {SLIDES.map((src, i) => (
            <div
              key={src}
              className={`hero-slide${i === current ? " active" : ""}`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-glow" />
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow-badge">
            Plataforma de fidelización · Uruguay
          </span>
          <h1 className="hero-title">
            Los negocios que crecen convierten clientes en{" "}
            <span className="accent">Fans</span>
          </h1>
          <p className="hero-sub">
            strix te ayuda a identificar a tus clientes más fieles, darles lo
            que merecen y hacer que hablen bien de vos.
          </p>
          <div className="hero-ctas">
            <a href="#contacto" className="btn btn-solid">
              Empezar ahora{" "}
              <ChevronRight className="icon" style={{ width: 14, height: 14 }} />
            </a>
            <a href="#como-funciona" className="btn btn-ghost-on-indigo">
              Ver cómo funciona
            </a>
          </div>
        </div>
        <div className="hero-phone">
          <div className="phone-frame">
            <div className="phone-screen">
              {PHONES.map((p, i) => (
                <img
                  key={p.src}
                  className={`hero-phone-img${i === current ? " active" : ""}`}
                  src={p.src}
                  alt={p.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
