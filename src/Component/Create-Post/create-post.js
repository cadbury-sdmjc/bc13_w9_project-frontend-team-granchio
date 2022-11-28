import React, { useState } from "react";
import "./create-post.css";

function CreatePost({ setRerender }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  async function handleClick() {
    await fetch("http://localhost:3000/api/posts", {
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
    });
    setRerender();
    setText("");
    setTitle("");
  }

  return (
    <div className="form-container-parent">
      <div className="profile-container">
        <div className="profile"></div>
      </div>
      <form>
        <div className="inputs-parent-container">
          <div className="title-div">
            <label>
              Title
              <textarea placeholder="Post's Title... " type="text" value={title} onChange={handleTitle}></textarea>
            </label>
          </div>
          <div className="content-div">
            <label for="text-input-id">Post here</label>
            <textarea
              id="text-input-id"
              placeholder="Post's Content..."
              type="text"
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </form>
      <div className="btn-div">
        <button className="button" type="button" onClick={handleClick}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
