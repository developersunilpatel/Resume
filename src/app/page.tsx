import About from "@/components/About";
import Blog from "@/components/Blog";
import ClientFeedback from "@/components/ClientFeedback";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <Services />

      <Portfolio />

      <ClientFeedback />

      <Blog />

      <Contact />
    </>
  );
}
