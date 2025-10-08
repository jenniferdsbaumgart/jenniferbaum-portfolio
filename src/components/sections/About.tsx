"use client";

import { arrowLeftIcon, downloadIcon } from "@/assets";
import { LanguageContext } from "@/contexts/LanguageContext";
import type { LanguageContextValue } from "@/types";
import Image from "next/image";
import React, { useContext } from "react";
import { Heading } from "../sub";

const About = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("About must be used within a LanguageProvider");
  }

  const { translations }: LanguageContextValue = context;

  return (
    <div
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-10"
    >
      <Heading text={translations.about.title} />
      <div className="flex w-full items-end justify-between md:justify-center">
        <Image
          src={"/about.png"}
          alt="About Image"
          width={300}
          height={300}
          className="lg:-[200px] w-[280px] md:hidden"
        />
        <div className="flex max-w-[800px] flex-col items-center rounded-xl bg-zinc-100 p-5 text-justify transition-colors dark:bg-zinc-800">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 transition-colors dark:text-zinc-700 md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="first-letter;pl-3 sm:text[14px] text-lg font-light text-gray-700 dark:text-white lg:text-[16px]">
            {translations.about.aboutText}
          </p>
          <a
            href="/jenniferbaum-frontend-cv.pdf"
            download=""
            className="border-gay-300 mt-6 flex w-max items-center gap-x-2 rounded-2xl bg-violet-600 px-7 py-3 font-light text-white transition-colors hover:bg-violet-400"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      {/* <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
                {aboutData.map((item, i) => (
                    <Achievements key={i} icon={item.icon} amount={item.amount} text={item.text}>
                        {item.icon} {item.text}
                    </Achievements>
                ))}
            </div> */}
    </div>
  );
};

export default About;
