import React, { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import newListPost from "../Forum/forum";
import "./create-post.css"

function CreatePost(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleClick() {
    fetch("http://localhost:3000/api/posts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        post_title: title,
        post_content: text,
      }),
    }).then((response) => {
      props.setRerender(!props.rerender);
      setText("");
      setTitle("");
    });
  }

  return (
    <div className="form-container">
      <form>
        <label>Title</label>
        <input
          placeholder="Post's Title "
          type="text"
          value={title}
          onChange={handleTitle}
        ></input>
        <label>Post here </label>
        <input
          placeholder="Post's Content"
          type="text"
          value={text}
          onChange={handleChange}
        ></input>

        <button type="button" onClick={handleClick}>
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
