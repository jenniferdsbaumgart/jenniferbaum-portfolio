"use client";
import React, { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/sub/LanguageToggle";

export default function Home(): React.ReactElement {
  const [id, setId] = useState<string>("home");
  const compsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting && entry.target.id) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (compsRef.current) {
      const compsArr = Array.from(compsRef.current.children) as HTMLElement[];
      compsArr.forEach((comp: HTMLElement) => {
        observer.observe(comp);
      });
    }

    return () => {
      observer.disconnect();
    };
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
