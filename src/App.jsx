import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cursor from "./components/Cursor";

import Home from "./layouts/Home";
import About from "./layouts/About";
import Services from "./layouts/Services";
import Portfolio from "./layouts/Portfolio";
import Contact from "./layouts/Contact";
import Footer from "./components/Footer";

function App() {
  // Refs pour chaque section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Gestion du scroll
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  // Scroll vers une section
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation d'entrée des sections
  const Section = ({ children, ref }) => (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );

  return (
    <>
      <motion.div style={{ opacity }}>
     
        <Section ref={homeRef}>
          <Home />
        </Section>

        <Section ref={aboutRef}>
          <About />
        </Section>

        <Section ref={servicesRef}>
          <Services />
        </Section>

        <Section ref={portfolioRef}>
          <Portfolio />
        </Section>

        <Section ref={contactRef}>
          <Contact />
        </Section>

        <Footer />

        <Cursor />

      </motion.div>
    </>
  );
}

export default App;