
import React, { useState, useEffect } from 'react';
import CreatePost from '../Create-Post/create-post';
import Post from '../Post/post';
import "./forum.css"

//const [post, setPost] = useState([{ author: "", content: ""
//}])
//render List of Postst using map()

//use effect to fetch data
//put data into state
//render stuff from state
//posts level - retrieve postobject from data and hand in to mapping bit

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

function Forum() {
  const [posts, setPosts] = useState([]);
  const [rerender, setRerender] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/api/posts");
      const data = await response.json();
      setPosts([...data.payload]);
    }
    getData();
  }, [rerender]);
  return (
    <div className="containerALL">
      <div className="title-forum">
        <h1 className="read">Read, Post, Comment</h1>
        <h3 className="anon">Anonymously!</h3>
      </div>
      <CreatePost
        setPosts={setPosts}
        posts={posts}
        rerender={rerender}
        setRerender={setRerender}
      ></CreatePost>
      <div className="post-container">
        <ul>
          {posts?.map(function (post) {
            return (
              <Post
                post_title={post?.post_title}
                author={post?.post_id}
                content={post?.post_content}
                post={post}
                rerender={rerender}
                setRerender={setRerender}
              />
            );
          })}
        </ul>
      </div>
      <div className="fix-btn-div">
        <button className="fix-button" type="button">
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default Forum;
