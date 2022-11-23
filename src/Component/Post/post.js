import react, { useState } from 'react';
import Comment from '../Comment/comment';
import CreateComment from '../Create-Comment/create-comment';
function Post(props) {
  const [comments, setComments] = useState([]);

  //when one post is clicked, all the associated comments are displayed
  //how could this work?
  //we could use a conditional rendering thing where the comments
  //map bit only renders/unrenders when the button turns !current

  return (
    <div>
      <div className="post">
        <h3>{props.author}</h3>
        <h5>{props.content}</h5>
      </div>
      <div className="comments">
        <ul>
          {comments.map(function (commentObj) {
            return (
              <Comment
                commAuthor={commentObj.author}
                commContent={commentObj.content}
              />
            );
          })}
        </ul>
        <CreateComment setComments={setComments} comments={comments} />
      </div>
    </div>
  );
}

export default Post;
