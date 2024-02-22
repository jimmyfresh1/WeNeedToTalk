import { useState, useRef, useEffect } from "react";
import Chatbox from "./components/Chatbox";
import parsec from "./assets/parsec2.png";
import startupSound from "./assets/osopen3.mp3";
import aesthetic95 from "./assets/aesthetic95.mp3";
import { motion, AnimatePresence } from "framer-motion";
import world from "./assets/world.png";
import Login from "./components/Login";
import "./App.css";
import "./index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogin2 = () => {
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

  useEffect(() => {
    if (!loggedIn) {
      const loginAudio = new Audio(aesthetic95);
      loginAudio.volume = 0.2;
      loginAudio.play();
    }
  }, []);

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

  return (
    <div id="root" className="aesthetic-effect-crt">
      <AnimatePresence>
        {loggedIn ? (
          <>
            <motion.div
              key="mainScreen"
              initial="initial"
              animate="animate"
              variants={backgroundVariants}
              className="newRoot backgroundImage"
            >
              <Chatbox setLoggedIn={setLoggedIn} />
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
                onClick={handleLogin2}
                className="icon2"
                src={world}
                alt=""
              />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              key="loginScreen"
              initial="initial"
              animate="animate"
              variants={loginVariants}
              className="newRoot loginBackground"
            >
              <Login handleLogin={handleLogin} />
            </motion.div>
          </>
        )}
        <audio ref={audioRef} src={startupSound} preload="auto" />
      </AnimatePresence>
    </div>
  );
}

export default App;
