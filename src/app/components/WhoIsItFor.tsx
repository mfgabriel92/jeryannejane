"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "@/app/components/ui";
import { slideWithFadeVariants } from "@/app/utils";
import { useEffect, useState } from "react";

export function WhoIsItFor() {
  const variants = slideWithFadeVariants;
  const [desktopScreenSize, setDesktopScreenSize] = useState(true);

  useEffect(() => {
    const _window = window;

    if (_window) {
      setDesktopScreenSize(_window.innerWidth > 1280);
    }
  }, []);

  return (
    <section className="container flex flex-col items-center gap-8 p-8 text-center md:text-start lg:h-screen xl:flex-row xl:px-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 2,
          ease: "backInOut",
          staggerChildren: 0.02,
          staggerDirection: -1,
        }}
        className="align-center flex flex-1 basis-1/2 flex-col justify-center gap-8"
      >
        <motion.h2 variants={variants} className="mt-12 lg:mt-0">
          This space is for the curious, the courageous, and the creative
        </motion.h2>
        <p>
          <motion.span variants={variants}>
            Falling in love or finding someone who we deeply connect with is
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            undeniably one of life’s most meaningful and enchanting experiences.
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            We all want to keep and grow that kind of connection, but any
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            relationship has its challenges, and we need more than emotional
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            attachment to sustain a healthy and fulfilling one. We need
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            authenticity which involves self-awareness, honesty, trust,
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            accountability, and other values to ensure our relationships’
          </motion.span>
          <motion.span variants={variants}> consistent growth.</motion.span>
        </p>
        <p>
          <motion.span variants={variants}>
            {" "}
            This space is an invitation for you to explore and
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            understand yourself and your relationships more. And with curiosity,
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            courage, and creativity, I am here to help and empower you to tap
            into
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            your full potential and develop the skills necessary to confidently
          </motion.span>
          <motion.span variants={variants}>
            {" "}
            create and nurture the best relationship for you.
          </motion.span>
        </p>
        <div className="flex flex-1 flex-col justify-center gap-4 md:flex-row">
          <Link href="#" className="btn btn-accent">
            Explore the Coaching Services
          </Link>
          <Link href="#" className="btn btn-accent">
            Explore the Coaching Programs
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{
          ease: "easeInOut",
          staggerChildren: 0.1,
          staggerDirection: -1,
        }}
        className="flex flex-1 basis-1/2"
      >
        <Slider
          dots
          vertical
          slidesToShow={desktopScreenSize ? 2 : 1}
          infinite={false}
        >
          <Slide>
            <h3 className="text-2xl font-semibold">Safety</h3>
            <p className="text-gray-500">
              Making you feel safe, is my number one priority in this space. You
              can trust that anything you share here is safe and confidential,
              and that you are welcome with full presence and no judgment at
              all. I admire your courage to be vulnerable, and I want to foster
              that by making sure you feel secure here.
            </p>
          </Slide>
          <Slide>
            <h3 className="text-2xl font-semibold">Compassion</h3>
            <p className="text-gray-500">
              Making you feel safe, is my number one priority in this space. You
              can trust that anything you share here is safe and confidential,
              and that you are welcome with full presence and no judgment at
              all. I admire your courage to be vulnerable, and I want to foster
              that by making sure you feel secure here.
            </p>
          </Slide>
          <Slide>
            <h3 className="text-2xl font-semibold">Curiosity</h3>
            <p className="text-gray-500">
              I am here to explore with you. Curiosity leads us to see creative
              solutions to our everyday challenges and helps us create the life
              and relationships we truly want. With curiosity, we can ask the
              right questions and find the best answers.
            </p>
          </Slide>
          <Slide>
            <h3 className="text-2xl font-semibold">Accountability</h3>
            <p className="text-gray-500">
              Your presence here means you are ready to take accountability for
              your life, and I celebrate you for that. I am here to help you
              foster more of that authentic accountability so you can see and
              experience how empowering and fulfilling your life and
              relationships can be when you step into your full capacity and
              take actions aligned with your goals.
            </p>
          </Slide>
        </Slider>
      </motion.div>
    </section>
  );
}
