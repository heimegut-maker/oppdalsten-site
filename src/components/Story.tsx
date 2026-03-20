import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Story() {
  return (
    <section id="om-oss" className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[560px]">
          {/* Left image */}
          <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0">
            <Image
              src="/images/Klevanbruddet 2 (2).jpg"
              alt="Klevanbruddet – Oppdal Sten sitt steinbrudd"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right content */}
          <div className="w-full lg:w-1/2 bg-[var(--bg-offwhite)] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] mb-3">
              VÅR HISTORIE
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--text-primary)] leading-tight mb-6">
              Fra fjell til ferdig produkt
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              I over 30 år har Oppdal Sten brutt og foredlet naturskifer fra
              fjellene i Oppdal. Vår skifer er formet av naturen gjennom
              millioner av år, og hvert stykke bærer med seg en unik karakter.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Vi kombinerer tradisjonelt håndverk med moderne teknikk for å
              levere stein av høyeste kvalitet – til prosjekter som varer i
              generasjoner.
            </p>
            <Link
              href="#om-oss"
              className="inline-flex items-center gap-2 text-[var(--accent-gold)] font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Les mer om oss
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
