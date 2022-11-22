import react, { useState } from 'react';
import CreatePost from '../Create-Post/create-post';
import Post from '../Post/post';
//const [post, setPost] = useState([{ author: "", content: ""
//}])
//render List of Postst using map()

function Forum() {
  const [posts, setPosts] = useState([
    { author: 'Blue Duck', content: 'qua qua' },
  ]);
  return (
    <div>
      <h1>Rubber Ducky Forum</h1>
      <ul>
        {posts.map(function (postObj) {
          return <Post author={postObj.author} content={postObj.content} />;
        })}
      </ul>
      <CreatePost setPosts={setPosts} posts={posts}></CreatePost>
    </div>
  );
}

export default Forum;
