function Comment(props) {
  return (
    <div>
      <h6>{props.currentComment.duck_name}</h6>
      <p>{props.currentComment.comment_content}</p>
    </div>
  );
}

export default Comment;
