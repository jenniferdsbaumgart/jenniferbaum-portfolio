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
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-10"
      aria-labelledby="about-heading"
    >
      <Heading text={translations.about.title} level={2} />
      <div className="flex w-full items-end justify-between md:justify-center">
        <Image
          src={"/about.png"}
          alt="Jennifer Baum working at her desk - A professional workspace showing dedication to frontend development"
          width={300}
          height={300}
          className="lg:-[200px] w-[280px] md:hidden"
        />
        <article className="bg-zinc-100 dark:bg-zinc-800 flex max-w-[800px] flex-col items-center rounded-xl p-5 text-justify transition-colors">
          <span
            className="text-zinc-100 dark:text-zinc-700 absolute -left-5 top-20 scale-[2.5] transition-colors md:hidden"
            aria-hidden="true"
          >
            {arrowLeftIcon}
          </span>
          <p className="first-letter;pl-3 sm:text[14px] text-gray-700 dark:text-white text-lg font-light lg:text-[16px]">
            {translations.about.aboutText}
          </p>
          <a
            href="/jenniferbaum-frontend-cv.pdf"
            download="Jennifer_Baum_Frontend_CV.pdf"
            className="border-gay-300 bg-violet-600 text-white hover:bg-violet-400 focus:ring-violet-400 mt-6 flex w-max items-center gap-x-2 rounded-2xl px-7 py-3 font-light transition-colors focus:outline-none focus:ring-2"
            aria-label="Download Jennifer Baum's CV as PDF"
          >
            <span>Download CV</span>
            <span className="text-xl" aria-hidden="true">
              {downloadIcon}
            </span>
          </a>
        </article>
      </div>
      {/* <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
                {aboutData.map((item, i) => (
                    <Achievements key={i} icon={item.icon} amount={item.amount} text={item.text}>
                        {item.icon} {item.text}
                    </Achievements>
                ))}
            </div> */}
    </section>
  );
};

export default About;
