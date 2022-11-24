import "./comment.css"
function Comment(props) {
  return (
    <div className="author-content-box">
      <div className="comment-post-container">
        <h6 className="comment-author">{props.currentComment.duck_name}</h6>
      </div>
      <p className ="comment-content">{props.currentComment.comment_content}</p>
    </div>
  );
}

export default Comment;
