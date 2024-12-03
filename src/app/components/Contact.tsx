"use client";

import { slideWithFadeVariants } from "@/app/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ContactForm } from "@/app/components/ui";

export function Contact() {
  return (
    <section className="container flex items-center lg:h-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{
          staggerChildren: 0.02,
          staggerDirection: -1,
        }}
        className="flex flex-1 flex-col gap-8"
      >
        <motion.h2 variants={slideWithFadeVariants} className="mt-12">
          Still not sure, or just have questions?
        </motion.h2>
        <p>
          <motion.span variants={slideWithFadeVariants}>
            Feel free to reach out if you have any questions about my services
            and if you’re
          </motion.span>
          <br />
          <motion.span variants={slideWithFadeVariants}>
            curious to learn more and get started, or book a free, 30-minute
            consultation
          </motion.span>
          <br />
          <motion.span variants={slideWithFadeVariants}>
            with me, where I explain in more details about them!
          </motion.span>
          <br />
        </p>
        <motion.div variants={slideWithFadeVariants}>
          <Link href="#" className="btn btn-accent">
            Book a free, 30-minute discovery call!
          </Link>
        </motion.div>
        <motion.p variants={slideWithFadeVariants} className="font-bold">
          I look forward to hearing from you!
        </motion.p>
      </motion.div>
      <div className="flex flex-1">
        <ContactForm />
      </div>
    </section>
  );
}
