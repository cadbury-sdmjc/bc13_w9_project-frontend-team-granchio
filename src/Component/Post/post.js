import react, { useState } from "react";
import Comment from "../Comment/comment";
import CreateComment from "../Create-Comment/create-comment";
import "./post.css";

function Post(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container-post">
      <div className="post">
        <button
          className="post-title-btn"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <div className="post-author-container">
            <h5 className="post-author">{props.post.duck_name}: </h5>
          </div>
          {props.post_title}
        </button>
      </div>
      {isExpanded && (
        <div className="comments containerBig">
          <p className="post-content">{props.content}</p>
          <ul>
            {props.post.comments.map((currentComment) => (
              <Comment post={props.post} currentComment={currentComment} />
            ))}
          </ul>
          <CreateComment
            rerender={props.rerender}
            setRerender={props.setRerender}
            setPosts={props.setPosts}
            posts={props.posts}
            post_id={props.post.post_id}
          />
        </div>
      )}
    </div>
  );
}

export default Post;
