"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#canales", label: "Canales" },
  { href: "#industrias", label: "Industrias" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <span className="logo">
          stri<span className="x">x</span>
        </span>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#contacto" className="btn btn-solid">
            <span>Empezar ahora</span>
            <ArrowRight className="icon" style={{ width: 16, height: 16 }} />
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
