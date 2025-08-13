"use client";

import Heading from "./sub/Heading";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const Experience = () => {
  const { translations } = useContext(LanguageContext);
  const date = new Date().getFullYear();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div id="experience" className="relative py-10 w-full">
      <Heading text={translations.experience.title} className="mb-10" />
      <Image
        src={"/jenny-seated.png"}
        alt={"Experience Image"}
        width={350}
        height={380}
        className="-right-2 -top-8 absolute sm:opacity-0 lg:opacity-70"
      />
      {/* CARDS STACKED, RESPONSIVE */}
      <div className="w-full flex flex-col items-center gap-8 mt-8 px-2">
        {translations.experience.experienceData.map((data, i) => (
          <motion.div
            key={`exp-card-${i}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 60 }}
            className="w-full md:max-w-2xl lg:max-w-3xl bg-gradient-to-br from-violet-50 via-white to-violet-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-violet-950 rounded-2xl p-5 md:p-8 shadow-lg border-l-4 border-violet-400 dark:border-violet-700 flex flex-col"
          >
            {/* Ano no topo esquerdo */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-500 to-violet-700 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow border-2 border-white dark:border-zinc-900">
                {date - translations.experience.experienceData.length + i + 1}
              </div>
              <h2 className="font-oswald text-lg md:text-2xl font-bold text-violet-900 dark:text-violet-300 drop-shadow-sm">
                {data.title}
              </h2>
            </div>
            {/* Educação */}
            <div className="mb-2">
              <h3 className="font-semibold text-violet-600 dark:text-violet-300 mb-1 tracking-wide">
                {translations.experience.educationTitle}:
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {data.education}
              </p>
            </div>
            {/* Experiência */}
            <div>
              <h3 className="font-semibold text-violet-600 dark:text-violet-300 mb-1 tracking-wide">
                {translations.experience.experienceTitle}:
              </h3>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1">
                {data.experience &&
                  data.experience.map((exp, j) => (
                    <li key={j} className="leading-relaxed flex items-start gap-2">
                      <span className="mt-2 w-2 h-2 rounded-full bg-violet-400 flex-shrink-0"></span>
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
