import React, { useState, useEffect } from "react";
import CreatePost from "../Create-Post/create-post";
import Post from "../Post/post";
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
  const [updates, setUpdates] = useState(false)
  const forceUpdate = React.useCallback(() => setPosts({}), []);

  useEffect(() => {
    async function getData() {
      setUpdates(true)
      const response = await fetch("http://localhost:3000/api/posts");
      const data = await response.json();
      setPosts([...data.payload]);
      function newListPost(i){
        forceUpdate()
        setPosts([...posts, i])
        setUpdates(false)
      }
        }
    getData();
    console.log("rica")
  }, [updates??true]);


  
  return (
    <div>
      <h1>Rubber Ducky Forum</h1>
      <ul>
        {posts?.map(function (post) {
          return <Post post_title={post?.post_title} author={post?.post_id} content={post?.post_content} post={post}/>;
        })}
      </ul>
      <CreatePost setPosts={setPosts} posts={posts}></CreatePost>
    </div>
  );
}

export default Forum
