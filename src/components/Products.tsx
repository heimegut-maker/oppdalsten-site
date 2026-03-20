"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    label: "BRUDDHELLER",
    image: "/images/Bruddheller kulehammer 1.jpg",
    alt: "Bruddheller i Oppdal-skifer",
  },
  {
    label: "BELEGNINGSSTEIN",
    image: "/images/Belegning bestemte mål, tørr.jpg",
    alt: "Belegningsstein i Oppdal-skifer",
  },
  {
    label: "FLIS & GULVHELLER",
    image: "/images/Gulvflis 1.jpg",
    alt: "Flis og gulvheller i Oppdal-skifer",
  },
  {
    label: "TØRRMUR",
    image: "/images/Tørrmur 5-12cm Oppdal Mørk (2).jpg",
    alt: "Tørrmur i Oppdal Mørk",
  },
  {
    label: "KANTSTEIN & TRINN",
    image: "/images/Kantstein 6.jpg",
    alt: "Kantstein i Oppdal-skifer",
  },
  {
    label: "SPESIALTILPASSET",
    image: "/images/Kompassrose 60x60 cm, Oppdal Mørk Slipt (3).jpg",
    alt: "Spesialtilpasset skifer – kompassrose",
  },
];

export default function Products() {
  const [active, setActive] = useState(0);

  return (
    <section id="produkter" className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Sidebar */}
          <div className="lg:w-80 shrink-0 bg-[var(--slate-charcoal)] p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] mb-2">
              VÅRE PRODUKTER
            </p>
            <h2 className="font-display text-3xl text-[var(--white)] mb-8">
              Utforsk sortimentet
            </h2>
            <div className="flex flex-row flex-wrap lg:flex-col gap-3">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActive(i)}
                  className={`text-left text-sm font-semibold tracking-wide px-4 py-2 rounded-full transition-colors ${
                    active === i
                      ? "bg-[var(--accent-gold)] text-[var(--white)]"
                      : "border border-white/30 text-white/70 hover:border-white/60 hover:text-[var(--white)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Image display */}
          <div className="flex-1 bg-[var(--bg-offwhite)] relative min-h-[400px] lg:min-h-0">
            <Image
              src={categories[active].image}
              alt={categories[active].alt}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 lg:p-8">
              <p className="text-[var(--white)] font-display text-2xl">
                {categories[active].label.charAt(0) +
                  categories[active].label.slice(1).toLowerCase()}
              </p>
              <p className="text-white/70 text-sm mt-1">
                Oppdal-skifer av høyeste kvalitet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
