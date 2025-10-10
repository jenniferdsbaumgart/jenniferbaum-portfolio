"use client";
import { Navbar } from "@/components/layout";
import {
  Hero,
  LazyAbout,
  LazyContact,
  LazyExperience,
  LazyProjects,
  LazySkills,
} from "@/components/sections/lazy";
import { Load } from "@/components/sub";
import { LanguageToggle, Toggle } from "@/components/ui";
import { PWAInstallPrompt } from "@/components/ui/interactions";
import { IntersectionLazySection } from "@/components/ui/loading";
import { SectionSkeleton } from "@/components/ui/skeleton";
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
              <IntersectionLazySection
                id="about"
                fallback={<SectionSkeleton lines={2} />}
              >
                <LazyAbout />
              </IntersectionLazySection>
              <IntersectionLazySection
                id="experience"
                fallback={<SectionSkeleton lines={3} />}
              >
                <LazyExperience />
              </IntersectionLazySection>
              <IntersectionLazySection
                id="skills"
                fallback={<SectionSkeleton lines={2} />}
              >
                <LazySkills />
              </IntersectionLazySection>
              <IntersectionLazySection
                id="projects"
                fallback={<SectionSkeleton lines={4} />}
              >
                <LazyProjects />
              </IntersectionLazySection>
              <IntersectionLazySection
                id="contact"
                fallback={<SectionSkeleton lines={1} />}
              >
                <LazyContact />
              </IntersectionLazySection>
            </div>
          </LanguageToggle>
        </Toggle>
        <PWAInstallPrompt />
      </LanguageProvider>
    </>
  );
}
