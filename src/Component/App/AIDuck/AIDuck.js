import React, { useState, useReducer } from "react";
import "./aiduck.css";
import Button from "../../Button/Button";

const sadKeanu =
  "https://media.vanityfair.com/photos/5df907d66056aa0008852c0a/master/pass/the-decade-in-content-sad-keanu.jpg";
const happyAkita = "https://sayingimages.com/wp-content/uploads/super-happy-memes.jpg";
const robotimg = "https://thumbs.dreamstime.com/b/cartoon-silly-robot-looking-55524172.jpg";

function CreateDuck(props) {
  const [text, setText] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [submitButtonShown, setSubmitButtonShown] = useState(true);
  const [resetButtonShown, setResetButtonShown] = useState(false);
  const [state, dispatch] = useReducer(reducer, { emotion: "", image: "" });

  function reducer(state, action) {
    switch (action.string) {
      case "happy":
        return {
          emotion: "I am so glad you are happy!! Check this out...",
          image: happyAkita,
        };
      case "sad":
        return {
          emotion: "I am so sorry you are sad!! Check this out...",
          image: sadKeanu,
        };
      default:
        return {
          emotion: "Sorry I am a RobotDuck, tell me if you are happy or sad...",
          image: robotimg,
        };
    }
  }
  console.log(state);

  function handleChange(event) {
    setText(event.target.value);
  }

  function identifyKeyWords(userString) {
    const keyWords = ["happy", "sad"];
    const stringArray = userString.split(" ");
    const matchArray = keyWords.filter((word) => stringArray.includes(word));
    dispatch({ string: matchArray[0] }); //for now just the first word found
  }

  function handleClick() {
    //calls function with state
    identifyKeyWords(text);
    setIsShown(!isShown);
    setText("");
    setResetButtonShown(!resetButtonShown);
    setSubmitButtonShown(!submitButtonShown);
  }

  function handleClickReset() {
    setResetButtonShown(!resetButtonShown);
    setSubmitButtonShown(!submitButtonShown);
    setIsShown(!isShown);
  }

  return (
    <div class="aiduck-container">
      <h2>Robot AI Cyber Ducky</h2>
      {submitButtonShown && (
        <>
          <label for="aiduck-input">How are you feeling today?</label>
          <textarea
            placeholder="Hello, I am a Duck. What can I do for you?"
            type="text"
            value={text}
            onChange={handleChange}
            className="aiduck-textarea"
            id="aiduck-input"
          ></textarea>
        </>
      )}
      {isShown && <p>{state.emotion}</p>}
      <div style={{ margin: "4px 0" }}>
        {submitButtonShown && <Button onClick={handleClick}>Click for helpful duck advice</Button>}
        {resetButtonShown && <Button onClick={handleClickReset}>Need more robot advice??</Button>}
      </div>
      <div className="btn-div">
        {resetButtonShown && (
          <div>
            <img alt="happy/sad" src={state.image} style={{ height: "400px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateDuck;
