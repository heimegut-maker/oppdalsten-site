"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/Gulvhelle Oppdal Mørk 20 mm.jpg",
    alt: "Gulvhelle Oppdal Mørk 20 mm",
    caption: "Gulvhelle Oppdal Mørk",
  },
  {
    src: "/images/Røff sittegruppe Oppdal Mørk (7).jpg",
    alt: "Røff sittegruppe i Oppdal Mørk skifer",
    caption: "Røff sittegruppe",
  },
  {
    src: "/images/Oppdal Mørk Antikbørstet.jpg",
    alt: "Oppdal Mørk Antikbørstet overflate",
    caption: "Antikbørstet overflate",
  },
  {
    src: "/images/Muring av tørrmurpipe.jpg",
    alt: "Muring av tørrmurpipe i Oppdal-skifer",
    caption: "Tørrmurpipe",
  },
  {
    src: "/images/Oppdal Mørk Slipt.jpg",
    alt: "Oppdal Mørk Slipt overflate",
    caption: "Slipt overflate",
  },
  {
    src: "/images/Belegning 60-80mm Kombinert Oppdal Mørk,Oppdal Trollheimen og Oppdal Mørk Golan (2).jpg",
    alt: "Kombinert belegning i Oppdal Mørk, Trollheimen og Golan",
    caption: "Kombinert belegning",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const getSlideIndex = (offset: number) =>
    (current + offset + slides.length) % slides.length;

  return (
    <section id="galleri" className="w-full bg-[#111318] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] mb-2 text-center">
          GALLERI
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--white)] text-center mb-12">
          Inspirasjon
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 lg:gap-6">
          {/* Left dimmed slide */}
          <div className="hidden md:block relative w-64 h-80 shrink-0 opacity-40">
            <Image
              src={slides[getSlideIndex(-1)].src}
              alt={slides[getSlideIndex(-1)].alt}
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>

          {/* Center active slide */}
          <div className="relative w-full max-w-xl h-80 sm:h-96 lg:h-[480px] shrink-0">
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 576px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-[var(--white)] font-display text-xl">
                {slides[current].caption}
              </p>
            </div>
          </div>

          {/* Right dimmed slide */}
          <div className="hidden md:block relative w-64 h-80 shrink-0 opacity-40">
            <Image
              src={slides[getSlideIndex(1)].src}
              alt={slides[getSlideIndex(1)].alt}
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-[var(--white)] transition-colors"
          aria-label="Forrige bilde"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-[var(--white)] transition-colors"
          aria-label="Neste bilde"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current
                ? "bg-[var(--accent-gold)]"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Gå til bilde ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
