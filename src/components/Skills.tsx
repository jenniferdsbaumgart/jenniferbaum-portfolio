"use client";

import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

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
    <div
      id="skills"
      className="flex-column flex min-h-screen items-center justify-center gap-y-20 py-24"
    >
      <Heading text={"Skills"} />
      <div className="flex w-full flex-wrap justify-center gap-x-8 gap-y-8 px-10 py-10 lg:gap-y-6">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.2 }}
            viewport={{ margin: "50px", once: true }}
            key={item.name}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-violet-300 bg-zinc-200 px-5 py-3 dark:border-violet-900 dark:bg-zinc-800 lg:px-2"
          >
            <Image
              src={item.icon}
              alt="Skills Image"
              width={100}
              height={100}
              className="h-auto w-[50px]"
            />
            <p className="text-sm dark:text-gray-300">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
