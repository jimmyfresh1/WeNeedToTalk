import React from "react";
import aesthetic95 from "../assets/aesthetic95.mp3";
import click from "../assets/click2.mp3";
import { motion, AnimatePresence } from "framer-motion";

const Welcome = (props) => {
  const { setReady } = props;
  const handleEnterClick = (e) => {
    e.preventDefault();
    const clickAudio = new Audio(click);
    clickAudio.volume = 0.4;
    clickAudio.play();
    clickAudio.onended = () => {
      const loginAudio = new Audio(aesthetic95);
      loginAudio.volume = 0.2;
      loginAudio
        .play()
        .then(() => {
          setReady(true);
        })
        .catch((error) => {
          console.error("Playback failed", error);
        });
    };
  };
  return (
    <motion.div
      key="enterScreen"
      className="newRoot initial"
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="login aesthetic-modal">
        <div className="aesthetic-modal-title">
          <div className="aesthetic-title-text">
            We Need To Talk By: Abisai Escobar and James Fern
          </div>
        </div>
        <div className="aesthetic-modal-content">
          <p>who's really on the other side?</p>
          <button className="modal-button" onClick={handleEnterClick}>
            Enter
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
