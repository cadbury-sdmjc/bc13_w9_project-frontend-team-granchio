import { useState, useContext } from "react";
import "./create-comment.css"
import {UserContext} from '../App/App.js'

function CreateComment(props) {
  const [text, setText] = useState("");
  const setIsShown = useContext(UserContext)

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    fetch("http://localhost:3000/api/comments", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        post_id: props.post_id,
        comment_content: text,
      }),
    }).then((response) => {
      setIsShown(true)
      props.setRerender(!props.rerender);
      setText("");
    });
  }

  return (
    <form>
      <h2 className="create-comment-title">
        Create a comment
        <textarea type="text" value={text} onChange={handleChange}></textarea>
      </h2>
      <button className="comment-btn" type="button" onClick={handleClick}>
        Post Comment
      </button>
    </form>
  );
}

export default CreateComment;
