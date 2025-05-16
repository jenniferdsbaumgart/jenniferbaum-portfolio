"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Load = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-zinc-700 to-zinc-900 z-50"
    >
      <img src="load-cat.gif" />
    </motion.div>
  );
};

export default Load;
