import { FileText, FolderOpen, BadgePercent, PenTool, ImageIcon, BookOpen, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const proItems = [
  { icon: FileText, label: "Tekniske datablad" },
  { icon: FolderOpen, label: "FDV-dokumentasjon" },
  { icon: BadgePercent, label: "Prosjektpriser" },
  { icon: PenTool, label: "Arkitektspesifikasjoner" },
];

const homeItems = [
  { icon: ImageIcon, label: "Inspirasjonsgalleri" },
  { icon: BookOpen, label: "Leggeanvisninger" },
  { icon: MapPin, label: "Finn forhandler" },
  { icon: Mail, label: "Få pristilbud" },
];

export default function AudienceCards() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[var(--bg-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Pro card */}
          <div className="bg-[var(--slate-charcoal)] p-10 sm:p-14">
            <h3 className="font-display text-2xl sm:text-3xl text-[var(--white)] mb-8">
              For fagfolk
            </h3>
            <ul className="space-y-5 mb-10">
              {proItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-4 text-white/80"
                >
                  <item.icon size={20} className="text-[var(--accent-gold)] shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#kontakt"
              className="inline-block border border-[var(--white)] text-[var(--white)] text-sm font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
            >
              Fagfolk-portalen
            </Link>
          </div>

          {/* Home card */}
          <div className="bg-[var(--accent-gold)] p-10 sm:p-14">
            <h3 className="font-display text-2xl sm:text-3xl text-[var(--white)] mb-8">
              For deg hjemme
            </h3>
            <ul className="space-y-5 mb-10">
              {homeItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-4 text-white/90"
                >
                  <item.icon size={20} className="text-[var(--white)] shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#kontakt"
              className="inline-block bg-[var(--slate-charcoal)] text-[var(--white)] text-sm font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Kom i gang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
