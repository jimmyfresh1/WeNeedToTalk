import React from "react";

const CharacterSelectBox = (props) => {
  const { char, username, status } = props;
  return (
    <div className="status-container">
      <div className={`sidebar-char ${char}`}>
        {username}
        <p>{status}</p>
      </div>
    </div>
  );
};

export default CharacterSelectBox;
