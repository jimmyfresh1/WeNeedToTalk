import React from "react";
import { motion } from "framer-motion";
import machineWireframe from "../../assets/characterpfps/manmachine_wireframe2.png";
import ping from "../../assets/ping.mp3";
const MachineSidebar = (props) => {
  const enterConvo = {
    initial: { opacity: 0, filter: "blur(5px)", transition: { duration: 1 } },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  const handleConvoExit = () => {
    const convoExit = new Audio(ping);
    convoExit.volume = 0.3;
    convoExit.play();
    setInConvo(false);
  };

  const { setInConvo } = props;
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={enterConvo}
      className="machine-sidebar"
    >
      <div className="machine-sidebar-top">
        <img src={machineWireframe} className="sidebar-pfp" alt="" />
      </div>
      <div className="machine-sidebar-bottom">
        <button
          className="start-convo-machine"
          onClick={() => handleConvoExit()}
        >
          End Conversation?
        </button>
      </div>
    </motion.div>
  );
};

export default MachineSidebar;
