import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export function Slide({ children }: Props) {
  const variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={variants}
      className="mb-4 flex flex-1 flex-col gap-4 bg-gray-50 p-8"
    >
      {children}
    </motion.div>
  );
}
