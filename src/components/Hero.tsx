import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/Tørrmur 5-12 cm i dybde, Oppdal Mørk (1).jpg"
        alt="Tørrmur i Oppdal Mørk skifer"
        fill
        className="object-cover"
        priority
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--white)] leading-tight">
            Naturlig skifer fra hjertet av Norge
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 font-body max-w-lg">
            Premium Oppdal-skifer til prosjekter som varer i generasjoner.
            Brutt og foredlet i Oppdal siden 1993.
          </p>
          <Link
            href="#produkter"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 text-[var(--white)] font-semibold text-base backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 transition-colors"
          >
            Utforsk produkter
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
