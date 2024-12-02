"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { slideWithFadeVariants } from "@/app/utils";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const variants = slideWithFadeVariants;
  const transformY = useTransform(scrollYProgress, [0, 10], ["0%", "50%"]);
  const y = useSpring(transformY, { damping: 20 });

  return (
    <section className="h-screen bg-yellow-400">
      <div className="container flex h-full flex-1 items-center gap-8">
        <motion.div style={{ y }}>
          <Image
            src="/about-me.png"
            width={612}
            height={530}
            alt=""
            className="border-b-8 border-r-8 border-brown-400"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 2,
            ease: "backInOut",
            staggerChildren: 0.02,
            staggerDirection: -1,
          }}
          className="flex flex-1 flex-col gap-8"
        >
          <motion.h2 variants={variants}>Hello, there!</motion.h2>
          <p>
            <motion.span variants={variants}>
              Firstly, thank you for being here. Let me tell you more about me
              and
            </motion.span>
            <motion.span variants={variants}>
              what this space is for. My name is Jeryanne, and from a very young
            </motion.span>
            <motion.span variants={variants}>
              age, <strong>love</strong> and <strong>relationships</strong> have
              always fascinated me.
            </motion.span>
          </p>

          <p>
            <motion.span variants={variants}>
              <strong>“What is love?”</strong> has been one of the earliest
              philosophical questions
            </motion.span>
            <motion.span variants={variants}>I’ve asked myself.</motion.span>
          </p>

          <p>
            <motion.span variants={variants}>
              I subconsciously started a mission of finding out what the answer
              is
            </motion.span>
            <motion.span variants={variants}>
              by observing what’s around me and what’s within me, starting from
            </motion.span>
            <motion.span variants={variants}>
              learning from my family who is my immediate environment as well as
            </motion.span>
            <motion.span variants={variants}>
              how that affected my pattern of attraction to certain people
              growing up.
            </motion.span>
          </p>

          <p>
            <motion.span variants={variants}>
              A series of different kinds of heartbreak made me familiar to
            </motion.span>
            <motion.span variants={variants}>
              loneliness and grief even at a young age and long story short, my
            </motion.span>
            <motion.span variants={variants}>
              journey to finding the answer to my greatest philosophical
              question
            </motion.span>
            <motion.span variants={variants}>
              led me to become a relationship coach in 2019.
            </motion.span>
          </p>

          <Link href="#" className="btn btn-accent self-center">
            Hi! Tell me more!
          </Link>
        </motion.div>
      </div>
    </section>
  );
}