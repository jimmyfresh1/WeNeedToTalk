import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const arrayText = [
  "textxxxxxxxxxxxxdddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
  "text",
];
// const [dataSource, setDataSource] = useState([arrayText]);
const Chattext = () => {
  return (
    <div className="chattext">
      {arrayText.map((item, index) => {
        return (
          <div className="chatbubblecontainer">
            <div className="chatbubble">
              <div className="username">TheChaospower</div>
              <div className="message-body">
                {index + 1} {item}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chattext;
