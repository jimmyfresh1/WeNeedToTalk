import React from "react";
import { motion } from "framer-motion";
import tsundereside from "../../assets/characterpfps/tsundere-sidebar.png";
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
    >
      <img src={tsundereside} className="pfp" alt="" />

      <h2 className="tsundere-sidebar-content">MaterialGirl95</h2>
      <h3 className="tsundere-sidebar-content">hello from me</h3>
      <p className="tsundere-sidebar-content">
        if you're reading this you must have a lot of time on your hands to talk
        to someone like me! to future friends: sorry when i'm harsh. i'm trying
        to work on it. i hope you'll forgive me. but if you're reading this, we
        must be friends, and maybe you already have. (－‸ლ)
      </p>
    </motion.div>
  );
};

export default TsundereSidebar;
