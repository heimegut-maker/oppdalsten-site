import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import AudienceCards from "@/components/AudienceCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <Gallery />
        <Story />
        <AudienceCards />
      </main>
      <Footer />
    </>
  );
}
