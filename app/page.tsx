import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EveningTimeline from "@/components/sections/EveningTimeline";
import WhyHome from "@/components/sections/WhyHome";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import BookingCTA from "@/components/sections/BookingCTA";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EveningTimeline />
        <WhyHome />
        <Gallery />
        <Reviews />
        <FAQ />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
    </>
  );
}
