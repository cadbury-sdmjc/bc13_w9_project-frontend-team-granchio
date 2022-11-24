import react, { useState } from "react";
import Comment from "../Comment/comment";
import CreateComment from "../Create-Comment/create-comment";
import "./post.css";

function Post(props) {
  //when one post is clicked, all the associated comments are displayed
  //how could this work?
  //we could use a conditional rendering thing where the comments
  //map bit only hide/show when the button turns !current

  // {
  //   "post_id": 3,
  //   "post_title": "Struggling with HTML",
  //   "post_content": "post content",
  //   "user_id": 1,
  //   "post_created": "2022-11-23T10:18:51.185Z",
  //   "comments": [
  //       {
  //           "comment_id": 3,
  //           "post_id": 3,
  //           "user_id": 5,
  //           "comment_content": "look at the HTML docs",
  //           "post_created": "2022-11-23T10:18:51.185Z"
  //       }
  const [isShown, setIsShown] = useState(false);

  const onClick = (event) => {
    setIsShown(!isShown);
  };

  return (
    <div className="container-post">
      <div className="post" key={props.post.post_id}>
        <button className="post-title-btn" onClick={onClick}>
          <div className="post-author-container">
            <h5 className="post-author">{props.post.duck_name}: </h5>{" "}
          </div>{" "}
          {props.post_title}
        </button>
      </div>
      {isShown && (
        <div className="containerBig">
          <div className="comments">
            <p className="post-content">{props.content}</p>
            <ul>
              {props.post.comments?.map(function (currentComment) {
                return (
                  <Comment post={props.post} currentComment={currentComment} />
                );
              })}
            </ul>
            <CreateComment
              rerender={props.rerender}
              setRerender={props.setRerender}
              setPosts={props.setPosts}
              posts={props.posts}
              post_id={props.post.post_id}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
