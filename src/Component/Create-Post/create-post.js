import React, {useState} from "react";

function CreatePost(props) {
    const [text, setText] = useState("")


    function handleChange(event) {
        setText(event.target.value);
    }

    function handleClick(){
        props.handleInput(text)
        props.setPosts()
    }

  return(
    <form>
      <label>
        Text here
        <input type="text" value={text} onChange={handleChange}></input>
      </label>
      <button type="button" onClick={handleClick}>Create Post</button>
    </form>
  );
}

export default CreatePost;
