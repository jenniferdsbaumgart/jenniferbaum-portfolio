"use client";
import { projectsButton } from "@/assets";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useKeyboardNavigation } from "@/hooks";
import type { LanguageContextValue } from "@/types";
import { animate, motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Heading, Project } from "../sub";

const Projects = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Projects must be used within a LanguageProvider");
  }

  const { translations }: LanguageContextValue = context;
  const [tech, setTech] = useState<string>("All");
  const [index, setIndex] = useState<number>(0);
  const prevIndex = useRef<number>(0);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const projects = translations?.projects?.projectsData || [];

  const handleClick = (): void => {
    const prevButton = buttonsRef.current[prevIndex.current];
    const currentButton = buttonsRef.current[index];

    if (prevButton) {
      animate(prevButton, { opacity: 0.5, scale: 1 });
    }
    if (currentButton) {
      animate(currentButton, { opacity: 1, scale: 1.2 });
    }
  };

  const handleKeyboardNavigation = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, index - 1)
        : Math.min(projectsButton.length - 1, index + 1);

    if (newIndex !== index && projectsButton[newIndex]) {
      setTech(projectsButton[newIndex]);
      setIndex(newIndex);
      buttonsRef.current[newIndex]?.focus();
    }
  };

  useKeyboardNavigation({
    onArrowLeft: () => handleKeyboardNavigation("left"),
    onArrowRight: () => handleKeyboardNavigation("right"),
  });

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-20"
      aria-labelledby="projects-heading"
    >
      <Heading text={translations.projects.title} level={2} />
      <div
        className="mb-2 flex flex-wrap items-center justify-start gap-4"
        role="tablist"
        aria-label="Filter projects by technology"
      >
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={el => {
              buttonsRef.current[i] = el;
            }}
            onClick={() => {
              setTech(text);
              setIndex(i);
            }}
            className="border-violet-500 text-gray-400 focus:ring-violet-400 rounded-xl border px-4 py-2 text-sm font-light tracking-wider focus:outline-none focus:ring-2"
            role="tab"
            aria-selected={tech === text}
            aria-controls="projects-grid"
            aria-label={`Filter projects by ${text}`}
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div
        id="projects-grid"
        className="flex flex-wrap items-center justify-center gap-5 py-4"
        role="tabpanel"
        aria-label={`Projects filtered by ${tech}`}
      >
        {projects
          .filter(project => {
            return project.tech.some((item: string) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((data, i) => (
            <motion.div key={`id-${i}`} layout>
              <Project data={data} index={i} />
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
