"use client";

import { skillsData } from "@/assets";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Heading } from "../sub";

const Skills = (): React.ReactElement => {
  const variants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <section
      id="skills"
      className="flex-column flex min-h-screen items-center justify-center gap-y-20 py-24"
      aria-labelledby="skills-heading"
    >
      <Heading text={"Skills"} level={2} />
      <div
        className="flex w-full flex-wrap justify-center gap-x-8 gap-y-8 px-10 py-10 lg:gap-y-6"
        role="list"
        aria-label="Technical skills and technologies"
      >
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.2 }}
            viewport={{ margin: "50px", once: true }}
            key={item.name}
            className="border-violet-300 bg-zinc-200 dark:border-violet-900 dark:bg-zinc-800 flex items-center justify-center gap-x-3 rounded-xl border px-5 py-3 lg:px-2"
            role="listitem"
          >
            <Image
              src={item.icon}
              alt={`${item.name} technology logo`}
              width={100}
              height={100}
              className="h-auto w-[50px]"
            />
            <p className="dark:text-gray-300 text-sm">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
