"use client";
import React from "react";
import { copyRightIcon, navbarData } from "@/assets";
import type { NavbarProps } from "@/types";

const Navbar = ({ id }: NavbarProps): React.ReactElement => {
  return (
    <div className="borde-gray-200 fixed left-0 top-0 z-10 flex h-full w-[85px] flex-col justify-between border-r bg-zinc-300 px-4 py-10 dark:bg-neutral-900 xl:py-6 sm:w-[60px]">
      <a href="/#home">
        <span className="text-3xl font-semibold text-violet-400">J</span>.
        <span className="block w-min origin-bottom rotate-90 text-[12px] font-semibold text-gray-400">
          Baum
        </span>
      </a>
      <div className="flex flex-col gap-y-3 xl:gap-y-1 sm:gap-y-2 xs:gap-y-0">
        {navbarData.map((item, i) => (
          <a
            href={`/#${item.id}`}
            key={i}
            className="xl:group-hover:scale-115 group flex flex-col items-center gap-y-2"
          >
            <span
              className={`"text-2xl transition-all group-hover:scale-125 xs:group-hover:scale-100 ${item.id === id ? "xs:scale-80 scale-110 text-violet-600 dark:text-violet-500 xl:scale-100" : "xs:scale-70 scale-100 text-zinc-500 xl:scale-90"}`}
            >
              {item.icon}
            </span>
            <span
              className={`-translate-x-2 text-center text-[10px] tracking-wider opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-white sm:text-[8px] ${i % 2 === 0 ? "-translate-x-2" : "-translate-x-2"} ${item.id === id && "-translate-x-0 opacity-100"}`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-6 flex items-center justify-center text-[13px] text-gray-500 xs:text-[11px]">
        <span className="absolute left-1/2 flex w-max origin-bottom-left -rotate-90 items-center tracking-wider transition-colors dark:text-gray-200">
          {copyRightIcon} 2022 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
