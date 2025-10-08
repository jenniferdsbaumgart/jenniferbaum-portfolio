import type { ReactNode } from "react";
import React from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue } from "framer-motion";

interface AchievementsProps {
  title: string;
  amount: number;
  children: ReactNode;
}

const Achievements = ({
  title,
  amount,
  children,
}: AchievementsProps): React.ReactElement => {
  const number: MotionValue<number> = useMotionValue(0);

  const count = (amount: number): void => {
    let i = 0;
    let timeOut: NodeJS.Timeout;

    const updateCount = (): void => {
      if (i <= amount) {
        number.set(i++);
        timeOut = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeOut);
      }
    };
    updateCount();
  };

  return (
    <div className="flex items-end gap-x-3">
      <span className="text4xl text-gray-700 dark:text-gray-400 lg:text-2xl">
        {children}
      </span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span
          className="text-2xl font-light text-violet-500 lg:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onViewportEnter={() => count(amount)}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500 transition-colors dark:text-white">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
