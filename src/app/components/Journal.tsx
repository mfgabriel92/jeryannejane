"use client";

import { motion } from "framer-motion";
import { slideWithFadeVariants } from "@/app/utils";

export function Journal() {
  return (
    <section className="container flex h-screen flex-col items-center gap-8 p-6">
      <motion.h2
        variants={slideWithFadeVariants}
        initial="hidden"
        whileInView="visible"
        className="mt-12"
      >
        My Journal
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 2,
          ease: "backInOut",
          staggerChildren: 0.02,
          staggerDirection: -1,
        }}
        className="grid h-full w-full grid-cols-3 grid-rows-2 items-stretch gap-8"
      >
        <motion.div
          variants={slideWithFadeVariants}
          className="bg-red-500 p-4"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="bg-red-500 p-4"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="bg-red-500 p-4"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="bg-red-500 p-4"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="bg-red-500 p-4"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="bg-red-500 p-4"
        ></motion.div>
      </motion.div>
    </section>
  );
}
