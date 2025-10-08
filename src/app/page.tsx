"use client";
import { Navbar } from "@/components/layout";
import {
    About,
    Contact,
    Experience,
    Hero,
    Projects,
    Skills
} from "@/components/sections";
import { Load } from "@/components/sub";
import { LanguageToggle, Toggle } from "@/components/ui";
import { LanguageProvider } from "@/contexts/LanguageContext";
import React, { useEffect, useRef, useState } from "react";

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
