import React, { useState, useReducer } from "react";

function CreateDuck(props) {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, { emotion: "" });
  const [isShown, setIsShown] = useState(false);
  const [submitButtonShown, setSubmitButtonShown] = useState(true);
  const [resetButtonShown, setResetButtonShown] = useState(false);
  const sadKeanu =
    "https://media.vanityfair.com/photos/5df907d66056aa0008852c0a/master/pass/the-decade-in-content-sad-keanu.jpg";
  const happyAkita =
    "https://sayingimages.com/wp-content/uploads/super-happy-memes.jpg";
  const [imageState, setImageState] = useState(sadKeanu);

  //sadKeanu is showing regardless of the input after the first submit, make this.
  //not happen

  function reducer(state, action) {
    switch (action.string) {
      case "happy":
        return { emotion: "I am so glad you are happy!! Check this out..." };
      case "sad":
        return { emotion: "I am so sorry you are sad!! Check this out..." };
      default:
        return {
          emotion: "Sorry I am a RobotDuck, tell me if you are happy or sad...",
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
    const matchArray = keyWords.filter((element) =>
      stringArray.includes(element)
    );
    dispatch({ string: matchArray[0] }); //for now just the first word found
    if (matchArray[0] === "happy") {
      setImageState(happyAkita);
    }
    if (matchArray[0] === "sad") {
      setImageState(sadKeanu);
    }

    // const intersection = array1.filter(element => array2.includes(element));
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
    <div className="form-container-parent">
      <div className="profile-container">
        <div className="profile"></div>
      </div>
      <form>
        <div className="inputs-parent-container">
          <br />
        </div>
        <div className="content-div">
          <label>Robot AI Cyber Ducky</label>
          <br />
          {submitButtonShown && (
            <textarea
              placeholder="Hello, I am a Duck. What can I do for you?"
              type="text"
              value={text}
              onChange={handleChange}
            ></textarea>
          )}
          {isShown && <textarea type="text" value={state.emotion}></textarea>}
        </div>
      </form>
      <div className="btn-div">
        {submitButtonShown && (
          <button className="button" type="button" onClick={handleClick}>
            Click for helpful duck advice
          </button>
        )}
        {resetButtonShown && (
          <button className="button" type="button" onClick={handleClickReset}>
            Need more robot advice??
          </button>
        )}

        {resetButtonShown && (
          <div>
            <img alt="happy/sad" src={imageState} style={{ height: "400px" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateDuck;
