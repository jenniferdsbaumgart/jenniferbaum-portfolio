"use client";
import { moonIcon, sunIcon } from "@/assets";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import React, { useEffect, useRef, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

interface ToggleProps {
  children: ReactNode;
}

const Toggle = ({ children }: ToggleProps): React.ReactElement => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement>(null);

  const addDarkTheme = (): void => {
    if (mainRef.current) {
      mainRef.current.classList.add("dark");
    }
    document.documentElement.classList.add("dark");
    setDarkTheme(true);
  };

  const removeDarkTheme = (): void => {
    if (mainRef.current) {
      mainRef.current.classList.remove("dark");
    }
    document.documentElement.classList.remove("dark");
    setDarkTheme(false);
  };

  useEffect(() => {
    const darkTheme = reactLocalStorage.get("darkTheme");
    const darkThemeParsed =
      darkTheme !== undefined && JSON.parse(darkTheme as string);

    const systemTheme =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme === undefined) {
      if (systemTheme) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    } else {
      if (darkThemeParsed) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    }
  }, []);

  const handleToggleClick = (): void => {
    if (!darkTheme) {
      addDarkTheme();
      reactLocalStorage.set("darkTheme", true);
    } else {
      removeDarkTheme();
      reactLocalStorage.set("darkTheme", false);
    }
  };

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-300 dark:bg-neutral-900 dark:bg-gradient-to-r">
        <div className="mx-auto flex max-w-[1200px] justify-center overflow-hidden sm:pl-[80px] sm:pr-5 xl:w-full xl:px-[90px]">
          <button
            onClick={handleToggleClick}
            className="s:right-10 hover:text-yellow text-yellow-600 hover:text-yellow-500 focus:ring-yellow-400 fixed right-14 top-10 z-40 focus:rounded-full focus:outline-none focus:ring-2"
            aria-label={
              darkTheme ? "Switch to light mode" : "Switch to dark mode"
            }
            aria-pressed={darkTheme}
            role="switch"
            aria-checked={darkTheme}
          >
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="bg-zinc-50 dark:bg-zinc-800 absolute block rounded-full p-1 text-4xl"
              aria-hidden="true"
            >
              {moonIcon}
            </motion.span>
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="bg-zinc-50 dark:bg-zinc-800 absolute block rounded-full p-1 text-3xl"
              aria-hidden="true"
            >
              {sunIcon}
            </motion.span>
            <span className="sr-only">
              {darkTheme
                ? "Dark mode is currently active"
                : "Light mode is currently active"}
            </span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
