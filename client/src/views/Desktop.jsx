import React from "react";
import parsec from "../assets/parsec2.png";
import world from "../assets/world.png";
import twitter from "../assets/ARTIST.png";
import music from "../assets/music.png";
import { motion } from "framer-motion";
import Chatbox from "../components/Chatbox";
import axios from "axios";
import desktopMusic from "../assets/test6.mp3";
const Desktop = (props) => {
  const { handleLogout } = props;
  let desktopSong = new Audio(desktopMusic);
  desktopSong.volume = 0.05;
  const deleteCookie = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/api/logout")
      .then((res) => {
        console.log(res);
        handleLogout();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMusic = () => {
    if (desktopSong.paused) {
      desktopSong.play();
    } else {
      desktopSong.pause();
    }
  };
  const backgroundVariants = {
    initial: { opacity: 0, transition: { duration: 2 } },
    animate: { opacity: 1, transition: { duration: 4 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  return (
    <motion.div
      key="mainScreen"
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
      className="newRoot backgroundImage"
    >
      <Chatbox />
      <motion.img
        className="icon"
        src={parsec}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.1 }}
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.1 }}
        onClick={deleteCookie}
        className="icon2"
        src={world}
        alt=""
      />

      <a className="icon3" href="https://twitter.com/aconfuseddragon?lang=en">
        <motion.img
          className="icon3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.1 }}
          onClick={handleLogout}
          src={twitter}
          alt=""
        />
      </a>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.1 }}
        className="icon4"
        src={music}
        onClick={handleMusic}
        alt=""
      />
    </motion.div>
  );
};

export default Desktop;
