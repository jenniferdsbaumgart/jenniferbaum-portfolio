"use client";
import { copyRightIcon, navbarData } from "@/assets";
import type { NavbarProps } from "@/types";
import React from "react";

const Navbar = ({ id }: NavbarProps): React.ReactElement => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleKeyboardNavigation = (direction: "up" | "down") => {
    const newIndex =
      direction === "up"
        ? Math.max(0, focusedIndex - 1)
        : Math.min(navbarData.length - 1, focusedIndex + 1);

    setFocusedIndex(newIndex);
    navLinksRef.current[newIndex]?.focus();
  };

  useKeyboardNavigation({
    onArrowUp: () => handleKeyboardNavigation("up"),
    onArrowDown: () => handleKeyboardNavigation("down"),
  });

  return (
    <nav
      className="borde-gray-200 bg-zinc-300 fixed left-0 top-0 z-10 flex h-full w-[85px] flex-col justify-between border-r px-4 py-10 dark:bg-neutral-900 sm:w-[60px] xl:py-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="/#home"
        aria-label="Jennifer Baum - Go to homepage"
        className="focus:ring-violet-400 focus:rounded-md focus:outline-none focus:ring-2"
      >
        <span className="text-violet-400 text-3xl font-semibold">J</span>.
        <span className="text-gray-400 block w-min origin-bottom rotate-90 text-[12px] font-semibold">
          Baum
        </span>
      </a>
      <ul
        className="flex flex-col gap-y-3 xs:gap-y-0 sm:gap-y-2 xl:gap-y-1"
        role="list"
      >
        {navbarData.map((item, i) => (
          <li key={i} role="listitem">
            <a
              ref={el => {
                navLinksRef.current[i] = el;
              }}
              href={`/#${item.id}`}
              className="xl:group-hover:scale-115 focus:ring-violet-400 group flex flex-col items-center gap-y-2 focus:rounded-md focus:outline-none focus:ring-2"
              aria-label={`Navigate to ${item.name} section`}
              onFocus={() => setFocusedIndex(i)}
              onBlur={() => setFocusedIndex(-1)}
              aria-current={item.id === id ? "page" : undefined}
            >
              <span
                className={`"text-2xl transition-all group-hover:scale-125 xs:group-hover:scale-100 ${item.id === id ? "xs:scale-80 text-violet-600 dark:text-violet-500 scale-110 xl:scale-100" : "xs:scale-70 text-zinc-500 scale-100 xl:scale-90"}`}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span
                className={`dark:text-white -translate-x-2 text-center text-[10px] tracking-wider opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:text-[8px] ${i % 2 === 0 ? "-translate-x-2" : "-translate-x-2"} ${item.id === id && "-translate-x-0 opacity-100"}`}
              >
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <footer className="text-gray-500 mt-6 flex items-center justify-center text-[13px] xs:text-[11px]">
        <span className="dark:text-gray-200 absolute left-1/2 flex w-max origin-bottom-left -rotate-90 items-center tracking-wider transition-colors">
          <span aria-hidden="true">{copyRightIcon}</span> 2022 -{" "}
          {new Date().getFullYear()}
        </span>
      </footer>
    </nav>
  );
};

export default Navbar;
