import About from "@/components/About";
// import Blog from "@/components/Blog";
// import ClientFeedback from "@/components/ClientFeedback";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
// import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <Skills />

      {/* <Services /> */}

      <Portfolio />

      {/* <ClientFeedback /> */}

      {/* <Blog /> */}

      <Experience />

      <Contact />
    </>
  );
}
