"use client";

import { LanguageContext } from "@/contexts/LanguageContext";
import type { LanguageContextValue } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useRef } from "react";
import { Heading } from "../sub";

const Experience = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Experience must be used within a LanguageProvider");
  }

  const { translations }: LanguageContextValue = context;
  const date = new Date().getFullYear();

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      className="relative w-full py-10"
      ref={containerRef}
      aria-labelledby="experience-heading"
    >
      <Heading text={translations.experience.title} level={2} />
      <Image
        src={"/jenny-seated.png"}
        alt={
          "Jennifer Baum in a professional setting - showcasing years of experience in frontend development"
        }
        width={350}
        height={380}
        className="absolute -right-2 -top-8 sm:opacity-0 lg:opacity-70"
      />
      {/* CARDS STACKED, RESPONSIVE */}
      <div className="mt-8 flex w-full flex-col items-center gap-8 px-2">
        {translations.experience.experienceData.map((data, i) => (
          <motion.article
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
            className="border-violet-400 from-violet-50 via-white to-violet-100 dark:border-violet-700 dark:from-zinc-900 dark:via-zinc-800 dark:to-violet-950 flex w-full flex-col rounded-2xl border-l-4 bg-gradient-to-br p-5 shadow-lg md:max-w-2xl md:p-8 lg:max-w-3xl"
            aria-labelledby={`experience-year-${i}`}
          >
            {/* Ano no topo esquerdo */}
            <header className="mb-2 flex items-center gap-3">
              <div
                className="border-white from-violet-500 to-violet-700 text-white dark:border-zinc-900 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-gradient-to-br text-sm font-bold shadow md:h-12 md:w-12 md:text-base"
                aria-label={`Year ${date - translations.experience.experienceData.length + i + 1}`}
              >
                {date - translations.experience.experienceData.length + i + 1}
              </div>
              <h2
                id={`experience-year-${i}`}
                className="font-oswald text-violet-900 dark:text-violet-300 text-lg font-bold drop-shadow-sm md:text-2xl"
              >
                {data.title}
              </h2>
            </header>
            {/* Educação */}
            <div className="mb-2">
              <h3 className="text-violet-600 dark:text-violet-300 mb-1 font-semibold tracking-wide">
                {translations.experience.educationTitle}:
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {data.education}
              </p>
            </div>
            {/* Experiência */}
            <div>
              <h3 className="text-violet-600 dark:text-violet-300 mb-1 font-semibold tracking-wide">
                {translations.experience.experienceTitle}:
              </h3>
              <ul
                className="text-gray-700 dark:text-gray-200 space-y-1"
                role="list"
              >
                {data.experience &&
                  data.experience.map((exp, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 leading-relaxed"
                      role="listitem"
                    >
                      <span
                        className="bg-violet-400 mt-2 h-2 w-2 flex-shrink-0 rounded-full"
                        aria-hidden="true"
                      ></span>
                      {exp}
                    </li>
                  ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
