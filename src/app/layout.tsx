import type { Metadata } from "next";
import { Funnel_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oppdal Sten | Norsk naturskifer siden 1993",
  description:
    "Premium Oppdal-skifer til prosjekter som varer i generasjoner. Bruddheller, belegningsstein, flis, tørrmur og mer fra hjertet av Norge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${funnelDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="font-body min-h-full flex flex-col">{children}</body>
    </html>
  );
}
