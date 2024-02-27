import React from "react";
import friend from "../../assets/characterpfps/friend.png";
const FriendHome = () => {
  return (
    <div className="friend-home chatmain char-home" id="chatscroll">
      <h1>Alias: Stanley Hitchcock McGrath</h1>
      <img src={friend} className="pfp" alt="" />
      <h2>Real Name: Most Recently, "Theodore" </h2>
    </div>
  );
};

export default FriendHome;
