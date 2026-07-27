import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollAnimation from "./hooks/useScrollAnimation";
import Certifications from "./components/Certifications";

function App() {
  useScrollAnimation();

  return (
    <div className="bg-navy min-h-screen">
      <Nav />
      <Hero />
      {/* <Stats /> */}
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
