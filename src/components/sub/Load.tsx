"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Load = (): React.ReactElement => {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.8 }}
      className="from-zinc-700 to-zinc-900 fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-t"
    >
      <Image
        src="/load-cat.gif"
        alt="Loading animation"
        width={200}
        height={200}
        priority
        unoptimized // For GIFs
      />
    </motion.div>
  );
};

export default Load;
