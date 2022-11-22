import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

function CreatePost(props) {
    const [text, setText] = useState("")


    function handleChange(event) {
        setText(event.target.value);
    }

    function handleClick(){
      const newPost = {
        author: uuidv4(),
        content: text
      }
        //props.handleInput(text)
        props.setPosts([...props.posts, newPost])
    }

  return(
    <form>
      <label>
        Post here
        <input type="text" value={text} onChange={handleChange}></input>
      </label>
      <button type="button" onClick={handleClick}>Create Post</button>
    </form>
  );
}

export default CreatePost;
