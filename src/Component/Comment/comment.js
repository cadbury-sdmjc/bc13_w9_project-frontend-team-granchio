function Comment(props) {
  console.log('hello', props.currentComment)
  return (
    <div>
      {/* <h6>{props.currentComment.user_id}</h6> */}
      <p>{props.currentComment.comment_content}</p>
    </div>
  );
}

export default Comment;

//  "post_id": 3,
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