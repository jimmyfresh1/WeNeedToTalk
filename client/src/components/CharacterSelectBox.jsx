import React from "react";

const CharacterSelectBox = (props) => {
  const { char, username, status } = props;
  return (
    <div className="sidebar-status-container">
      <div className={`sidebar-char-status ${char}`}>
        {username}
        <p>{status}</p>
      </div>
    </div>
  );
};

export default CharacterSelectBox;
