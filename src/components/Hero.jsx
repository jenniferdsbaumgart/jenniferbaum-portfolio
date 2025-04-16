"use client";
import Image from "next/image";
import { heroIcons } from "@/assets/index";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
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
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div className="flex flex-row-reverse items-center space-x-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <div className="relative w-[700px] aspect-[3/4]">
              <Image
                src={"/hero-image-jb.png"}
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
              Hi!
            </motion.span>
          </motion.div>
        </motion.div>
        <div className="flex flex-col items-center">
          <h1 className="font-abril text-transparent bg-clip-text bg-gradient-to-r from-[#41587c] to-[#4e1968] leading-[3rem] mb-5 text-6xl text-right tracking-wider dark:text-violet-100 transition-colors sm:text-2xl">
              Jennifer Baumgart
            </h1>
            <p className="font-kumar text-left text-lg tracking-wider text-gray-700 dark:text-gray-100 transition-colors">
              Frontend Developer & UX/UI Designer
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center gap-x-10 text-3xl text-violet-300 sm:text-2xl"
            >
              {heroIcons.map((item) => (
                <a
                  href="#"
                  key={item.id}
                  className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
            <motion.a initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              href="#"
              className="mx-auto mt-7 block w-max rounded-lg px-4 py-2 font-light capitalize tracking-wider text-black  bg-gradient-to-r from-[#B3CCF4] to-[#D9B8EA] hover:from-[#c382e4] hover:to-[#6097ee] hover:scale-200 transition-transform duration-300 ease-in-out"
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Talk to me
            </motion.a>
          </div>
        </div>
    </div>
  );
};

export default Hero;
