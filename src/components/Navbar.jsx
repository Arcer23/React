import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function Navbar() {
  return (
    <>
      <nav className="mb-20 items-center justify-between py-6 flex">
        <div className="flex flex-shrink-1 items-center text-2xl text-white ml-6">
          arcer
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="m-8 flex items-center justify-center gap-4 text-2xl text-white"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <FaGithub />
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.2 }}
           onHoverStart={(e) => {}}
           onHoverEnd={(e) => {}}
          >
            <FaLinkedin className="text-blue-400"/>
          </motion.div>
          <motion.div
           whileHover={{ scale: 1.2 }}
           onHoverStart={(e) => {}}
           onHoverEnd={(e) => {}}
          >
            <FaInstagram className="text-purple-400"/>
          </motion.div>

          <motion.div
           whileHover={{ scale: 1.2 }}
           onHoverStart={(e) => {}}
           onHoverEnd={(e) => {}}
          >
            <FaSquareTwitter className="text-blue-500"/>
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
}
