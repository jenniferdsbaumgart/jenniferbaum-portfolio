"use client";
import { heroIcons } from "@/assets";
import { LanguageContext } from "@/contexts/LanguageContext";
import type { LanguageContextValue, WindowOffset } from "@/types";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";
import React, { useContext, useState } from "react";
import { ReactTyped } from "react-typed";
import MailLineIcon from "remixicon-react/MailLineIcon";

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
    <section
      id="home"
      className="grid min-h-screen place-items-center py-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      aria-label="Hero section"
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
                alt="Jennifer Baum - Professional portrait showing a confident frontend developer and UI/UX designer"
                fill
                priority={true}
                className="object-contain"
              />
            </div>
            <motion.span
              className="text-white absolute text-3xl font-semibold"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 1 : 0,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              aria-live="polite"
            >
              {translations.hero.saudation}
            </motion.span>
          </div>
        </motion.div>
        <header className="flex flex-col items-center">
          <h1 className="font-bebas text-gray-700 dark:text-zinc-300 mb-0 text-center text-9xl leading-[6rem] transition-colors sm:text-4xl">
            {translations.hero.title}
          </h1>
          <div
            className="text-semibold font-oswald text-transparent bg-gradient-to-r from-[#a98df5] to-[#7c1bfc] bg-clip-text text-center text-5xl uppercase transition-colors sm:text-xl"
            aria-label="Professional roles"
          >
            <ReactTyped
              strings={["Frontend Developer", "UI/UX Designer"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </div>
          <p className="text-light font-oswald text-gray-400 text-center text-lg uppercase">
            {translations.hero.subtitle}
          </p>
          <motion.nav
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-violet-400 mt-8 flex justify-center gap-x-10 text-3xl sm:text-2xl"
            aria-label="Social media links"
          >
            {heroIcons.map(item => (
              <a
                href={item.url}
                key={item.id}
                className="hover:bg-violet-400 hover:text-white focus:ring-violet-400 rounded-lg transition-colors focus:outline-none focus:ring-2"
                aria-label={`Visit Jennifer's ${item.id} profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">{item.icon}</span>
              </a>
            ))}
          </motion.nav>
          <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            href="#contact"
            className="bg-violet-500 text-gray-200 hover:bg-violet-400 focus:ring-violet-400 mx-auto mt-7 flex flex-row gap-2 rounded-2xl px-8 py-3 font-light capitalize tracking-wider transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 sm:px-6 sm:py-2 sm:text-sm"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            aria-label="Go to contact section"
          >
            <MailLineIcon aria-hidden="true" />{" "}
            {translations.hero.contactButton}
          </motion.a>
        </header>
      </div>
    </section>
  );
};

export default Hero;
