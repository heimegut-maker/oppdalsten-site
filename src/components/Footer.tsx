import Link from "next/link";

const produktLinks = [
  { label: "Bruddheller", href: "#" },
  { label: "Belegningsstein", href: "#" },
  { label: "Flis & Gulvheller", href: "#" },
  { label: "Tørrmur", href: "#" },
  { label: "Kantstein & Trinn", href: "#" },
  { label: "Spesialtilpasset", href: "#" },
];

const omOssLinks = [
  { label: "Vår historie", href: "#om-oss" },
  { label: "Bærekraft", href: "#" },
  { label: "Kvalitet & Sertifiseringer", href: "#" },
  { label: "Jobb hos oss", href: "#" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="w-full bg-[var(--slate-charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-xl text-[var(--white)] mb-3">
              OPPDAL STEN
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Norsk naturskifer av høyeste kvalitet, brutt og foredlet i Oppdal
              siden 1993.
            </p>
            <address className="text-white/50 text-sm not-italic leading-relaxed">
              Klevavegen 42
              <br />
              7340 Oppdal
              <br />
              Norge
            </address>
          </div>

          {/* Produkter */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] text-[var(--accent-gold)] mb-5">
              PRODUKTER
            </h4>
            <ul className="space-y-3">
              {produktLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[var(--white)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Om oss */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] text-[var(--accent-gold)] mb-5">
              OM OSS
            </h4>
            <ul className="space-y-3">
              {omOssLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[var(--white)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] text-[var(--accent-gold)] mb-5">
              KONTAKT
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+4772423000"
                  className="text-white/60 hover:text-[var(--white)] transition-colors"
                >
                  +47 72 42 30 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:post@oppdalsten.no"
                  className="text-white/60 hover:text-[var(--white)] transition-colors"
                >
                  post@oppdalsten.no
                </a>
              </li>
              <li className="text-white/60">
                Man–Fre: 07:00–15:30
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Oppdal Sten AS. Alle rettigheter
            reservert.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/40 text-xs hover:text-white/60 transition-colors"
            >
              Personvern
            </Link>
            <Link
              href="#"
              className="text-white/40 text-xs hover:text-white/60 transition-colors"
            >
              Vilkår
            </Link>
            <Link
              href="#"
              className="text-white/40 text-xs hover:text-white/60 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
