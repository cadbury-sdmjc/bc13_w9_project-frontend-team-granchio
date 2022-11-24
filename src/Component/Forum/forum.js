import React, { useState, useEffect } from "react";
import CreatePost from "../Create-Post/create-post";
import Post from "../Post/post";
import "./forum.css";

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
    </div>
  );
}

export default Forum;
