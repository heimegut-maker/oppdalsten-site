"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Produkter", href: "#produkter" },
  { label: "Galleri", href: "#galleri" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Tips & Råd", href: "#tips" },
  { label: "Forhandlere", href: "#forhandlere" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--white)] border-b border-[var(--divider-grey)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display text-xl tracking-wider text-[var(--text-primary)]">
            OPPDAL STEN
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="bg-[var(--accent-gold)] text-[var(--white)] text-sm font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity"
            >
              Få tilbud
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Meny"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--white)] border-t border-[var(--divider-grey)]">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="bg-[var(--accent-gold)] text-[var(--white)] text-sm font-semibold px-5 py-2.5 text-center hover:opacity-90 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              Få tilbud
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
