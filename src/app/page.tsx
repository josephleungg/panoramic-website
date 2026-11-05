import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Booking from "@/components/sections/Booking";
import GiftCardBanner from "@/components/sections/GiftCardBanner";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Booking />
        <GiftCardBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
