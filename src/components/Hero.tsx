"use client";
import React from "react";
import Image from "next/image";
import { heroIcons } from "@/assets";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { useState, useContext } from "react";
import MailLineIcon from "remixicon-react/MailLineIcon";
import { ReactTyped } from "react-typed";
import { LanguageContext } from "@/contexts/LanguageContext";
import type { WindowOffset, LanguageContextValue } from "@/types";

const Hero = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Hero must be used within a LanguageProvider");
  }

  const { translations }: LanguageContextValue = context;

  const [windowOffset, setWindowOffset] = useState<WindowOffset>({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState<boolean>(false);
  const [buttonHover, setButtonHover] = useState<boolean>(false);

  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = (): void => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, 3]);

  return (
    <div
      id="home"
      className="grid min-h-screen place-items-center py-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div className="flex flex-row-reverse items-center space-x-8 sm:flex sm:flex-col sm:gap-8 sm:space-x-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <div
            className="flex items-center justify-center"
            style={{
              transform: mouseMove
                ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                : "none",
              transition: "0.1s",
            }}
          >
            <div className="relative aspect-[3/4] w-[700px] sm:w-[200px]">
              <Image
                src={"/jb4.png"}
                alt="Person Image"
                fill
                priority={true}
                className="object-contain"
              />
            </div>
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 1 : 0,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
            >
              {translations.hero.saudation}
            </motion.span>
          </div>
        </motion.div>
        <div className="flex flex-col items-center">
          <h1 className="mb-0 text-center font-bebas text-9xl leading-[6rem] text-gray-700 transition-colors dark:text-zinc-300 sm:text-4xl">
            {translations.hero.title}
          </h1>
          <ReactTyped
            strings={["Frontend Developer", "UI/UX Designer"]}
            typeSpeed={80}
            backSpeed={50}
            loop
            className="text-semibold bg-gradient-to-r from-[#a98df5] to-[#7c1bfc] bg-clip-text text-center font-oswald text-5xl uppercase text-transparent transition-colors sm:text-xl"
          />
          <p className="text-light text-center font-oswald text-lg uppercase text-gray-400">
            {translations.hero.subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-x-10 text-3xl text-violet-400 sm:text-2xl"
          >
            {heroIcons.map(item => (
              <a
                href={item.url}
                key={item.id}
                className="rounded-lg transition-colors hover:bg-violet-400 hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            href="#contact"
            className="mx-auto mt-7 flex flex-row gap-2 rounded-2xl bg-violet-500 px-8 py-3 font-light capitalize tracking-wider text-gray-200 transition-transform duration-300 ease-in-out hover:bg-violet-400 sm:px-6 sm:py-2 sm:text-sm"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            <MailLineIcon /> {translations.hero.contactButton}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
