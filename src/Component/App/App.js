import { useState, createContext } from "react";
import "./App.css";
import Button from "../Button/Button";
import Forum from "../Forum/forum";
import AIDuck from "./AIDuck/AIDuck.js";
import homeDuck from "./backtohomepageduck.png";
import speechDuck from "./duckwithspeach.png";

export const UserContext = createContext();

//w3 example of useContext seems to be for components
//that are in the same file? watch scandiMosh
//to see if he goes over importing to components that
//live in another file

function App() {
  const [isShown, setIsShown] = useState(false);
  const [AiDuckShown, setAiDuckShown] = useState(false);
  const [showButtonContainer, setshowButtonContainer] = useState(true);
  const onClick = () => {
    setIsShown(true);
    setshowButtonContainer(!showButtonContainer);
  };
  function touchedMaDuck() {
    setshowButtonContainer(!showButtonContainer);
    setIsShown(false);
    setAiDuckShown(false);
  }

  function onClickDuck() {
    setshowButtonContainer(!showButtonContainer);
    setAiDuckShown(true);
  }

  function toClickorNotToCLick() {
    showButtonContainer ? console.log("don't touch my duck dude.") : touchedMaDuck();
  }

  return (
    <header className="App-header">
      <img
        className="duck-img"
        alt="Duck says How are you feeling today?"
        src={showButtonContainer ? speechDuck : homeDuck}
        onClick={toClickorNotToCLick}
      />
      {showButtonContainer && (
        <>
          <div className="home-container">
            <div className="duck-container">
              <h2>CHEER ME UP</h2>
              <p>Submit your mood to your personal duck to brighten your day</p>
              <Button onClick={onClickDuck}>Angry duck</Button>
            </div>
            <div className="duck-container">
              <h2>SUPPORT EACH OTHER</h2>
              <p>Talk anonymously to your fellow bootcampers and share struggles</p>
              <Button onClick={onClick}>Anon duck</Button>
            </div>
          </div>
        </>
      )}
      {isShown && (
        <UserContext.Provider value={setIsShown}>
          <Forum showForum={onClick} isShown={isShown}></Forum>
        </UserContext.Provider>
      )}
      {AiDuckShown && <AIDuck></AIDuck>}
    </header>
  );
}

export default App;
