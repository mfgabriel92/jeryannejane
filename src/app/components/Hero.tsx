"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideWithFadeVariants } from "@/app/utils";

export function Hero() {
  const titleVariants = slideWithFadeVariants;

  return (
    <section className="flex h-screen pt-[88.48px] lg:flex-row">
      <div
        className="-z-10 flex h-full w-full flex-1 justify-center bg-yellow-400 lg:relative lg:w-auto lg:justify-end">
        <motion.div
          initial={{
            x: -40,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
          className="relative h-full w-full overflow-hidden"
        >
          <Image src="/hero.png" fill alt="" className="object-cover p-6" />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeOut",
          staggerChildren: 0.05,
          delayChildren: 0.5,
          staggerDirection: -1
        }}
        className="absolute inset-0 flex flex-1 flex-col items-center justify-center gap-8 text-center text-white lg:relative lg:text-gray-900"
      >
        <h1 className="flex flex-col leading-normal">
          <motion.span variants={titleVariants}>The best</motion.span>
          <motion.span variants={titleVariants}>relationships</motion.span>
          <motion.span variants={titleVariants}>are built with</motion.span>
          <motion.span variants={titleVariants}>authenticity</motion.span>
        </h1>
        <motion.p
          variants={titleVariants}
          className="text-bold text-xl md:text-2xl"
        >
          It is my mission to help you have it.
        </motion.p>
      </motion.div>
    </section>
  );
}
