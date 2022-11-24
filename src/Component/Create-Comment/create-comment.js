import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateComment(props) {
  const [text, setText] = useState("");

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
      props.setRerender(!props.rerender);
    });
  }

  return (
    <form>
      <label>
        Comment here
        <input type="text" value={text} onChange={handleChange}></input>
      </label>
      <button type="button" onClick={handleClick}>
        Create Comment
      </button>
    </form>
  );
}

export default CreateComment;
