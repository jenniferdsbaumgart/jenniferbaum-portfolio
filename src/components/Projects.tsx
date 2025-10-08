"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsButton } from "@/assets";
import { animate, motion } from "framer-motion";
import { LanguageContext } from "@/contexts/LanguageContext";
import { LanguageContextValue } from "@/types";

const Projects = (): React.ReactElement => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('Projects must be used within a LanguageProvider');
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

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="projects" className="min-h-screen py-20 px-8">
      <Heading text={translations.projects.title} />
      <div className="flex flex-wrap items-center justify-start gap-4 mb-2">
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={(el) => {
              buttonsRef.current[i] = el;
            }}
            onClick={() => {
              setTech(text);
              setIndex(i);
            }}
            className="border border-violet-500 rounded-xl px-4 py-2 text-sm font-light tracking-wider text-gray-400"
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 py-4">
        {projects
          .filter((project) => {
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
    </div>
  );
};

export default Projects;