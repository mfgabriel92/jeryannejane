"use client";

import { motion } from "framer-motion";
import { slideWithFadeVariants } from "@/app/utils";
import Link from "next/link";

export function Testimonials() {
  return (
    <section className="bg-yellow-400 lg:h-screen">
      <div className="container flex h-full flex-col items-center gap-8 p-8">
        <motion.h2
          variants={slideWithFadeVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-12"
        >
          My Clients&#39; Satisfaction
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 2,
            ease: "backInOut",
            staggerChildren: 0.02,
          }}
          className="grid h-full w-full grid-cols-1 items-stretch gap-8 md:grid-cols-2"
        >
          <motion.div
            variants={slideWithFadeVariants}
            className="h-[320px] bg-blue-500 p-4 lg:h-auto"
          ></motion.div>
          <motion.div
            variants={slideWithFadeVariants}
            className="h-[320px] bg-blue-500 p-4 lg:h-auto"
          ></motion.div>
          <motion.div
            variants={slideWithFadeVariants}
            className="h-[320px] bg-blue-500 p-4 lg:h-auto"
          ></motion.div>
          <motion.div
            variants={slideWithFadeVariants}
            className="h-[320px] bg-blue-500 p-4 lg:h-auto"
          ></motion.div>
        </motion.div>
        <Link href="#" className="btn btn-accent">
          What else did they say?
        </Link>
      </div>
    </section>
  );
}
