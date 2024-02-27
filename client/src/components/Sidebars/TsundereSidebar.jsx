import React from "react";
import { motion } from "framer-motion";

const TsundereSidebar = () => {
  const enterConvo = {
    initial: { opacity: 0, filter: "blur(5px)", transition: { duration: 1 } },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={enterConvo}
      className="tsundere-sidebar"
    ></motion.div>
  );
};

export default TsundereSidebar;
