"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-zinc-700 to-zinc-900 z-50"
    >
      <img src="load-cat.gif" alt="Loading animation" />
    </motion.div>
  );
};

export default Load;