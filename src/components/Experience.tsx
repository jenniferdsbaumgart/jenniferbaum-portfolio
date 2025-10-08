"use client";

import React from "react";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";
import { useRef, useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/contexts/LanguageContext";
import type { LanguageContextValue } from "@/types";

const Experience = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Experience must be used within a LanguageProvider");
  }

  const { translations }: LanguageContextValue = context;
  const date = new Date().getFullYear();

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="experience" className="relative w-full py-10" ref={containerRef}>
      <Heading text={translations.experience.title} />
      <Image
        src={"/jenny-seated.png"}
        alt={"Experience Image"}
        width={350}
        height={380}
        className="absolute -right-2 -top-8 lg:opacity-70 sm:opacity-0"
      />
      {/* CARDS STACKED, RESPONSIVE */}
      <div className="mt-8 flex w-full flex-col items-center gap-8 px-2">
        {translations.experience.experienceData.map((data, i) => (
          <motion.div
            key={`exp-card-${i}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: "spring",
              stiffness: 60,
            }}
            className="flex w-full flex-col rounded-2xl border-l-4 border-violet-400 bg-gradient-to-br from-violet-50 via-white to-violet-100 p-5 shadow-lg dark:border-violet-700 dark:from-zinc-900 dark:via-zinc-800 dark:to-violet-950 lg:max-w-3xl md:max-w-2xl md:p-8"
          >
            {/* Ano no topo esquerdo */}
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-500 to-violet-700 text-sm font-bold text-white shadow dark:border-zinc-900 md:h-12 md:w-12 md:text-base">
                {date - translations.experience.experienceData.length + i + 1}
              </div>
              <h2 className="font-oswald text-lg font-bold text-violet-900 drop-shadow-sm dark:text-violet-300 md:text-2xl">
                {data.title}
              </h2>
            </div>
            {/* Educação */}
            <div className="mb-2">
              <h3 className="mb-1 font-semibold tracking-wide text-violet-600 dark:text-violet-300">
                {translations.experience.educationTitle}:
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-200">
                {data.education}
              </p>
            </div>
            {/* Experiência */}
            <div>
              <h3 className="mb-1 font-semibold tracking-wide text-violet-600 dark:text-violet-300">
                {translations.experience.experienceTitle}:
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-200">
                {data.experience &&
                  data.experience.map((exp, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-violet-400"></span>
                      {exp}
                    </li>
                  ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
