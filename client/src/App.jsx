import { useState, useRef, useEffect } from "react";
import Chatbox from "./components/Chatbox";
import parsec from "./assets/parsec2.png";
import startupSound from "./assets/osopen3.mp3";
import aesthetic95 from "./assets/aesthetic95.mp3";
import click from "./assets/click2.mp3";
import { motion, AnimatePresence } from "framer-motion";
import world from "./assets/world.png";
import Login from "./components/Login";
import "./App.css";
import "./index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ready, setReady] = useState(false); // New state to handle the readiness to play the sound
  const handleLogin = (e) => {
    const clickAudio = new Audio(click);
    clickAudio.volume = 0.4;
    clickAudio.play();
    e.preventDefault();
    clickAudio.onended = () => setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  const audioRef = useRef(null);
  useEffect(() => {
    if (loggedIn) {
      const audio = audioRef.current;
      audio.volume = 0.2;
      audio.play();
    }
  }, [loggedIn]);

  const handleEnterClick = (e) => {
    e.preventDefault();
    const clickAudio = new Audio(click);
    clickAudio.volume = 0.4;
    clickAudio.play();
    clickAudio.onended = () => {
      const loginAudio = new Audio(aesthetic95);
      loginAudio.volume = 0.2; // Adjust the volume if needed
      loginAudio
        .play()
        .then(() => {
          // Audio started playing
          setReady(true); // Update the state to indicate the user is ready to proceed
        })
        .catch((error) => {
          console.error("Playback failed", error);
        });
    };
  };

  const backgroundVariants = {
    initial: { opacity: 0, transition: { duration: 3 } },
    animate: { opacity: 1, transition: { duration: 5 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  const loginVariants = {
    initial: { opacity: 0, transition: { duration: 2 } },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  let renderPage;
  switch (true) {
    case !loggedIn && !ready:
      renderPage = (
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
      break;
    case loggedIn:
      renderPage = (
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
            transition={{ delay: 3.7, duration: 0.1 }}
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7, duration: 0.1 }}
            onClick={handleLogout}
            className="icon2"
            src={world}
            alt=""
          />
        </motion.div>
      );
      break;
    default:
      renderPage = (
        <motion.div
          key="loginScreen"
          initial="initial"
          animate="animate"
          variants={loginVariants}
          className="newRoot loginBackground"
        >
          <Login handleLogin={handleLogin} />
        </motion.div>
      );
  }

  return (
    <div id="root" className="aesthetic-effect-crt">
      <AnimatePresence>
        {renderPage}
        <audio ref={audioRef} src={startupSound} preload="auto" />
      </AnimatePresence>
    </div>
  );
}

export default App;
