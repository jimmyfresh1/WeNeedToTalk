import React from "react";
const CharacterSelectBox = (props) => {
  const { char, username, status, handleCharacterSelect, currentCharacter } =
    props;
  return (
    <div className="sidebar-status-container">
      <div
        className={`sidebar-char-status ${char}`}
        onClick={() => handleCharacterSelect(char)}
        style={{
          filter:
            currentCharacter == char
              ? "brightness(1.3) drop-shadow(5px 5px 5px #fafeff) contrast(1.2) hue-rotate(30deg) saturate(1.2)"
              : "none",
        }}
      >
        {username}
        <p>{status}</p>
      </div>
    </div>
  );
};

export default CharacterSelectBox;
