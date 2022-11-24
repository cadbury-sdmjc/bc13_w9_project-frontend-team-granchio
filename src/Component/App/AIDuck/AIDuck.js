import React, { useState, useReducer } from "react";

function CreateDuck(props) {
  const [text, setText] = useState("");
  //   const [duckAI, dispatch] = useReducer(reducer, []);

  // useEffect(() => {
  //   //if the database is down, comment out this useEffect, and uncomment the one above it
  //   async function getData() {
  //     const response = await fetch("http://localhost:3000/api/posts");
  //     const data = await response.json();
  //     setPosts([...data.payload]);
  //   }
  //   getData();
  // }, [rerender]);

    const reducer = (state, action) => {
      switch (action.type) {
        case "happy":
          return "get a something happy"
        default:
          return state;
      }
    };

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick(e) {
    dispatch({ type: "a type", payload: {e}})
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
    reducer(e)
    
    fetch("http://localhost:3000/api/posts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_title: "dave",
        post_content: text,
      }),
    }).then((response) => {
      props.setRerender(!props.rerender);
      setText("");
    });
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
          <textarea
            placeholder="Hello, I am a Duck. What can I do for you?"
            type="text"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      <div className="btn-div">
        <button className="button" type="button" onClick={handleClick}>
          Click for helpful duck advice
        </button>
      </div>
    </div>
  );
}

export default CreateDuck;
