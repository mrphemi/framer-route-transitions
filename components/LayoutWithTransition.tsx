import { PropsWithChildren } from "react";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

import Nav from "./Nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const fade = {
  hidden: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* <motion.div
        className="fixed inset-0 h-screen w-full bg-black origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed inset-0 h-screen w-full bg-black origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      /> */}

      <motion.div
        className="fixed inset-0 h-screen w-full bg-black"
        initial={{
          clipPath: "circle(0)",
        }}
        exit={{
          clipPath: "circle(100%)",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed inset-0 h-screen w-full bg-black flex justify-center items-center"
        initial={{
          clipPath: "circle(100%)",
        }}
        animate={{
          clipPath: "circle(0)",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          when: "beforeChildren",
          delay: 1.5,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold"
        >
          Some Loading Text
        </motion.p>
      </motion.div>

      <motion.div
        variants={fade}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${montserrat.variable} font-sans z-10`}
      >
        <Nav />
        {children}
      </motion.div>
    </>
  );
};

export default Layout;
