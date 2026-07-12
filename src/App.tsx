import { Helmet } from "react-helmet-async";
import { useSectionSEO } from "./hooks/useSectionSEO";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Catalogue from "./components/Catalogue";
import About from "./components/About";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { seo, business } from "./data/content";

export default function App() {
  useSectionSEO();

  return (
    <>
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: business.fullName,
            description: seo.home.description,
            areaServed: business.region,
            telephone: business.phone,
            email: business.email,
            address: business.address,
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Catalogue />
        <Technology />
        <Benefits />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
