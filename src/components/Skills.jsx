"use client";

import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i) => ({
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
    <div id="skills" className="min-h-screen flex flex-column items-center justify-center gap-y-20 py-24">
      <Heading text={"Skills"} />
      <div className="w-full py-10 px-10 flex justify-center flex-wrap gap-x-8 gap-y-8 lg:gap-y-6">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.2 }}
            viewport={{ margin: "50px", once: true }}
            key={item.name}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-violet-300 dark:border-violet-900 bg-zinc-200 dark:bg-zinc-800 px-5 py-3 lg:px-2"
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
