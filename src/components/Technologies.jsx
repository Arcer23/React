import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiPython } from "react-icons/di";
import { motion } from "framer-motion";
import { useRef } from "react";

const icon = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
export default function Technologies() {
  const cons = useRef(null);
  return (
    <>
      <motion.div ref={cons} className="border-b border-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={icon(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={icon(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={icon(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 p-4"
          >
            <BiLogoPostgresql className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={icon(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 p-4"
          >
            <DiPython className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={icon(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
