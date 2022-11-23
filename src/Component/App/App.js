import react, { useState } from "react";
import "./App.css";
import Button from "../Button/Button";
import Forum from "../Forum/forum";

function App() {
  const [isShown, setIsShown] = useState(false);
  const onClick = (event) => {
    setIsShown(true);
  };

  return (
    <header className="App-header">
      <div className="App">
        <div className="home-container">
          <div className="anon-duck-container">
            <Button onClick={onClick} />
          </div>
          <div className="angry-duck-container">
            <button className="angry-duck-btn">Angry Duck</button>
          </div>
        </div>
        {isShown && <Forum></Forum>}
      </div>
    </header>
  );
}

export default App;
