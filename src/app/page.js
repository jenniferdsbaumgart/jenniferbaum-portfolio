"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";
import { useState, useRef, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/sub/LanguageToggle";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);
  return (
    <>
      <Load />
      <LanguageProvider>
        <Toggle>
          <LanguageToggle>
            <Navbar id={id} />
            <div className="" ref={compsRef}>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </div>
          </LanguageToggle>
        </Toggle>
      </LanguageProvider>
    </>
  );
}
