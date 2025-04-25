"use client"
import Achievements from "./sub/Achievements";
import Heading from "./sub/Heading";
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
    return (
        <div id="about" className="min-h-screen flex flex-col items-center justify-center">
            <Heading text={'About Me'}/>
            <div className="w-full flex items-end justify-between md:justify-center">
                <Image src={'/untitled.png'} alt="About Image" width={300} height={300} className="w-[280px] lg:-[200px] md:hidden"/>
                <div className="max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify flex flex-col items-center dark:bg-zinc-800 transition-colors">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700 transition-colors">{arrowLeftIcon}</span>
                    <p className="text-lg font-light text-gray-700 first-letter;pl-3 lg:text-[16px] sm:text[14px] dark:text-white">{aboutText}</p>
                    <a href="/nick-cv.pdf" download="" className="w-max px-7 py-3 flex items-center gap-x-2 mt-6 rounded-2xl border-gay-300 bg-violet-600 font-light text-white hover:bg-violet-400 transition-colors">
                        <span>Download CV</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>
            <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
                {aboutData.map((item, i) => (
                    <Achievements key={i} icon={item.icon} amount={item.amount} text={item.text}>
                        {item.icon} {item.text}
                    </Achievements>
                ))}
            </div>
        </div>
    );
}

export default About;