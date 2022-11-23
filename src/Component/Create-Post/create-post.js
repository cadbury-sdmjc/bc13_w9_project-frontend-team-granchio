import React, {useState} from "react";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios"
import newListPost from "../Forum/forum";

function CreatePost(props) {
    const [text, setText] = useState("")
const [title, setTitle] = useState("");
 

 var sendPost = {}

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleTitle(event) {
      setTitle(event.target.value);
    }

    function handleClick(){
axios
  .post("http://localhost:3000/api/posts", {
    post_title: title,
    post_content: text
  })
  .then(function (response) {
    console.log(response);
    sendPost = {title, text}
  });
  newListPost(sendPost)
  // .catch(function (error) {
  //   console.log(error);
  // });
      // const newPost = {
      //   author: uuidv4(),
      //   content: text
      // }
      //   //props.handleInput(text)
      //props.setPosts([...props.posts, sendPost])
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