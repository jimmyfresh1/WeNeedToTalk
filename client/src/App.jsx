import { useState, useRef, useEffect } from "react";
import Welcome from "./views/Welcome";
import Windows from "./views/Windows";
import Desktop from "./views/Desktop";

import startupSound from "./assets/osopen3.mp3";
import click from "./assets/click2.mp3";

import { AnimatePresence } from "framer-motion";
import "./App.css";
import "./index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ready, setReady] = useState(false);

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

  let renderPage;
  switch (true) {
    case !loggedIn && !ready:
      renderPage = <Welcome setReady={setReady} />;
      break;
    case loggedIn:
      renderPage = <Desktop handleLogout={handleLogout} />;
      break;
    default:
      renderPage = <Windows handleLogin={handleLogin} />;
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
