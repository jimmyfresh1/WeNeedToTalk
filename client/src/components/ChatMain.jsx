import React from "react";
import { useState } from "react";
import ChatHome from "./ChatHome";
import TsundereHome from "./Profiles/TsundereHome";
import MachineHome from "./Profiles/MachineHome";
import GranddadHome from "./Profiles/GranddadHome";
import DetectiveHome from "./Profiles/DetectiveHome";
import FriendHome from "./Profiles/FriendHome";
import TedHome from "./Profiles/TedHome";
import SocratesHome from "./Profiles/SocratesHome";
import KatarinaHome from "./Profiles/KatarinaHome";

const ChatMain = (props) => {
  const { currentCharacter } = props;
  let renderChatMain;
  switch (true) {
    case currentCharacter == "tsundere":
      renderChatMain = <TsundereHome />;
      break;
    case currentCharacter == "machine":
      renderChatMain = <MachineHome />;
      break;
    case currentCharacter == "your-granddad":
      renderChatMain = <GranddadHome />;
      break;
    case currentCharacter == "detective":
      renderChatMain = <DetectiveHome />;
      break;
    case currentCharacter == "friend":
      renderChatMain = <FriendHome />;
      break;
    case currentCharacter == "ted":
      renderChatMain = <TedHome />;
      break;
    case currentCharacter == "socrates":
      renderChatMain = <SocratesHome />;
      break;
    case currentCharacter == "katarina":
      renderChatMain = <KatarinaHome />;
      break;
    default:
      renderChatMain = <ChatHome />;
  }
  return <>{renderChatMain}</>;
};

export default ChatMain;
