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
      <div className="App">
        <img
          className="duck-img"
          alt="Duck says How are you feeling today?"
          src={showButtonContainer ? speechDuck : homeDuck}
          onClick={toClickorNotToCLick}
        />
        {showButtonContainer && (
          <>
            <div className="home-container">
              <div className="anon-duck-container">
                <div className="content-wrapper">
                  <h2 className="home-h2">CHEER ME UP</h2>
                  <p className="home-desc">Submit your mood to your personal duck to brighten your day</p>
                  <button className="angry-duck-btn" onClick={onClickDuck}>
                    Angry Duck
                  </button>
                </div>
              </div>
              <div className="angry-duck-container">
                <div className="content-wrapper">
                  <h2 className="home-h2">SUPPORT EACH OTHER</h2>
                  <p className="home-desc">Talk anonymously to your fellow bootcampers and share struggles</p>
                  <Button onClick={onClick} />
                </div>
              </div>
            </div>
          </>
        )}
        {isShown && (
          <UserContext.Provider value={setIsShown}>
            <Forum showForum={onClick} isShown={isShown}></Forum>
          </UserContext.Provider>
        )}
        <div>{AiDuckShown && <AIDuck></AIDuck>}</div>
      </div>
    </header>
  );
}

export default App;
