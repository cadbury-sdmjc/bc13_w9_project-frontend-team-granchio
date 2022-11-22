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
    <div className="App">
      <Button onClick={onClick} />
      {isShown && <Forum></Forum>}
    </div>
  );
}

export default App;
