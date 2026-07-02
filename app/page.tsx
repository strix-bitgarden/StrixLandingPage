import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Funcionalidades from "@/components/Funcionalidades";
import Canales from "@/components/Canales";
import Industrias from "@/components/Industrias";
import Faq from "@/components/Faq";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <ComoFunciona />
        <Funcionalidades />
        <Canales />
        <Industrias />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
