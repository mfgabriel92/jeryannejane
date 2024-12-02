"use client";

import { motion } from "framer-motion";
import { slideWithFadeVariants } from "@/app/utils";
import Link from "next/link";

export function Journal() {
  return (
    <section className="container flex flex-col items-center gap-8 p-6 lg:h-screen">
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
        className="grid h-full w-full grid-cols-1 items-stretch gap-8 md:grid-cols-2"
      >
        <motion.div
          variants={slideWithFadeVariants}
          className="h-[320px] bg-red-500 p-4 lg:h-auto"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="h-[320px] bg-red-500 p-4 lg:h-auto"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="h-[320px] bg-red-500 p-4 lg:h-auto"
        ></motion.div>
        <motion.div
          variants={slideWithFadeVariants}
          className="h-[320px] bg-red-500 p-4 lg:h-auto"
        ></motion.div>
      </motion.div>
      <Link href="#" className="btn btn-accent">
        Where is the rest?
      </Link>
    </section>
  );
}
