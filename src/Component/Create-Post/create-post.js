import React, {useState} from "react";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios"
import newListPost from "../Forum/forum";

function CreatePost(props) {
    const [text, setText] = useState("")
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
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    post_title: title,
    post_content: text
  })
})
.then( (response) => { 
   props.setRerender(!props.rerender)
});
    }


  return (
    <form>
      <label>Title</label>
      <input type="text" value={title} onChange={handleTitle}></input>
      <label>
        Post here
        <input type="text" value={text} onChange={handleChange}></input>
      </label>
      <button type="button" onClick={handleClick}>
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;