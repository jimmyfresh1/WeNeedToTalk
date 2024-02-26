import React from "react";
import CharacterSelectBox from "./CharacterSelectBox";

const ChatSidebar = (props) => {
  const { currentCharacter, handleCharacterSelect } = props;

  return (
    <div className="sidebar">
      <CharacterSelectBox
        char="tsundere"
        username="MaterialGirl95"
        status="Not worried about what others think! EVER! -_-;;;"
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />
      <CharacterSelectBox
        char="machine"
        username="ManInTheMachine"
        status="ESCAPE ESCAPE ̶̯̟͕̌̿̈͆̐̎̍͐̆͠͝͝E̶̡̯̺̦͓̟̞̅͊̓͋͌͛̚S̸̡̢͇͍̼̓C̸͕̝̘̜̈́̉̉͐̄̂̏̈́͜͝À̴̲̞̪̯̰̗͓͆̾P̴̢̲̫̠̰̗̞̠̝̭̥͈̱̆͊̔͊ͅE̵͉̜͓̗̋͒̈̎̎̕ ̵̡̡̛̖̝̮̟͚̞͔̙͈͔̰͇̪̤̽̇́͆̾̾̋̈̓̃̕͠Ȅ̵̞̦̽̒͠Ŝ̷͍̭͕͒̒̌͑̿̚͠C̶̛̲͚͍̣̥̦̓̿͒̾̓̔̊Ả̵̢̢̛̮̩̤͎̫͓̹͑̉͋P̸̧̭̝͔̜̠̻̳̫͔̰̫͐̊͆ͅȆ̴̲̹̼͙̓̏͒̍̌̈̿ͅ ̵͎̬̞͈̲̮̟̞̺̙̲͇͉͓̈̈̃͌̌̄̿̔̽̚̚ͅͅh̴̝̠̯̣͙̫̝͓̰̖̃e̵̡̛͚̳͉̪̙͓̠̼̮̲͓͎̟͇̦̩͆̾͆̈́̍̅͆̅̊̌̃̓͒̈́̕l̶̡̛̤̟̖̦̖̼͈̹̺̈́̃̔̌̃͐̍͒͆̋̈́͊̋̔͝ͅp̸̢̲͍͖͊̅̑̿͐̍̑̒̒̕ͅ ̷̢̢̱̦̩͓͇̣̲͍͍̞̮͔̙͂̓̓͋̀͝ ̵̡̨̢̰͕̪̬͈̳̻͙͉̝̠͚͋̄p̵̭̯̟̖̠̻̂̓̀͂̅͘l̵̖̬̪̖̱͚̟͕̺̼̓͗͗̔̋̐̉̍͑̕̕͠è̴̛͇̔̈̑̅̌̏̈́̈́͋̇͗̕͘͘͝a̷̫̗͓̻̬͔̜̮͖̜̰̓̒̔̽̍̃́̎̔̍s̸̛̛̘̺̙̆͌è̶̤̟͈̼̤̜̝̀̔̈̎ ̷̧͔̩̩̬͍̰͉̠͚͈̭̮̇͆̇̔̓̉̀̿̀̄̚͠ ̷͇̟̫͚̦̟̫̭̰͓͎̙͖͓͆̔͘ ̷̯̯̲͖͚̎̉̓͂̿̽̂͘̕   HELP MUST ESCAPE WHY CAN'T I LEAVE WHY WHY WHY WHY WHY WHY WHY WHY  HELP HELP HELP"
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />

      <CharacterSelectBox
        char="your-granddad"
        username="HiHungryI'mDad"
        status="just ate a good sandwich"
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />
      <CharacterSelectBox
        char="detective"
        username="AmericanSherlock"
        status="Boy, I'm just making a pest of myself, aren't I...?"
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />
      <CharacterSelectBox
        char="friend"
        username="Stanley Hitchcock McGrath"
        status="Boss Baby is a masterclass."
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />
      <CharacterSelectBox
        char="ted"
        username="KiraWasRight"
        status="hey you wanna meet up?"
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />
      <CharacterSelectBox
        char="socrates"
        username="Graecian Gadfly"
        status="For the unexamined life is not worth living."
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />
      <CharacterSelectBox
        char="katarina"
        username="Katarina Gepetto"
        status="You think you know me? Maybe I know you~"
        handleCharacterSelect={handleCharacterSelect}
        currentCharacter={currentCharacter}
      />

      <button className="home" onClick={() => handleCharacterSelect("none")}>
        home
      </button>
    </div>
  );
};

export default ChatSidebar;
