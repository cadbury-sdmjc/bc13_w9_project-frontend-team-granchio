import react, { useState } from 'react';
import './App.css';
import Button from '../Button/Button';
import Forum from '../Forum/forum';
import duckwithspeach from './duckwithspeach.png';

function App() {
  const [isShown, setIsShown] = useState(false);
  const [anonButtonIsShown, setAnonButtonIsShown] = useState(true);

  const onClick = (event) => {
    setIsShown(true);
    setAnonButtonIsShown(!anonButtonIsShown);
  };

  return (
    <header className="App-header">
      <div className="App">
            <img
              className="duck-img"
              alt="Duck says How you feel today?"
              src={require('./duckwithspeach.png')}
            />
        {anonButtonIsShown && (
          <>
            <div className="home-container">
              <div className="anon-duck-container">
                <div className="content-wrapper">
                  <h2 className="home-h2">CHEER ME UP</h2>
                  <p className="home-desc">
                    Submit your mood to your personal duck to brighten your day
                  </p>
                  <button className="angry-duck-btn">Angry Duck</button>
                </div>
              </div>
              <div className="angry-duck-container">
                <div className="content-wrapper">
                  <h2 className="home-h2">SUPPORT EACH OTHER</h2>
                  <p className="home-desc">
                    Talk anonymously to your fellow bootcampers and share
                    struggles
                  </p>
                  <Button onClick={onClick} />
                </div>
              </div>
            </div>
          </>
        )}
        {isShown && <Forum></Forum>}
      </div>
    </header>
  );
}

export default App;
