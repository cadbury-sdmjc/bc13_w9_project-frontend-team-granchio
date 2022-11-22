import {useState} from "react";
import { v4 as uuidv4 } from "uuid";

function CreateComment(props){
    const [text, setText] = useState("")
    
    function handleChange(event) {
        setText(event.target.value);
    }
    
    function handleClick(){
        const newComment = {
            author: uuidv4(),
            content: text,
        };
        props.setComments([...props.comments, newComment])
    }
    
    return(
        <form>
      <label>
        Comment here
        <input type="text" value={text} onChange={handleChange}></input>
      </label>
      <button type="button" onClick={handleClick}>Create Comment</button>
    </form>
  );
}

  
  export default CreateComment