import react, { useState } from 'react';
import './App.css';
import Button from '../Button/Button';
import Forum from '../Forum/forum';

function App() {
  const [isShown, setIsShown] = useState(false);
  const [anonButtonIsShown, setAnonButtonIsShown] = useState(true)

  const onClick = (event) => {
    setIsShown(true);
    setAnonButtonIsShown(!anonButtonIsShown)
  };

  return (
    <header className="App-header">
      <div className="App">
        {anonButtonIsShown && <Button onClick={onClick} />}
        {isShown && <Forum></Forum>}
      </div>
    </header>
  );
}

export default App;
