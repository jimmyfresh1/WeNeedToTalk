import React from "react";
import Login from "../components/Login";
import { motion } from "framer-motion";
import "../Startup.css";
import SignUp from "../components/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const loginVariants = {
  initial: { opacity: 0, transition: { duration: 2 } },
  animate: { opacity: 1, transition: { duration: 2 } },
};

const Windows = (props) => {
  const { handleLogin } = props;
  return (
    <motion.div
      key="loginScreen"
      initial="initial"
      animate="animate"
      variants={loginVariants}
      className="newRoot loginBackground"
    >
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login handleLogin={handleLogin} />} />
          <Route path={"/register"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </motion.div>
  );
};

export default Windows;
