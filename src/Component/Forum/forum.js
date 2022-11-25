import React, { useState, useEffect } from "react";
import CreatePost from "../Create-Post/create-post";
import Post from "../Post/post";
import "./forum.css";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [reversePosts, setReversePosts] = useState(posts.slice().reverse())
  const [rerender, setRerender] = useState(true);

  // useEffect(() => { no longer needed, here for posterity
  //   //if you have uncommented this because the db is down, scroll to the bottom, and uncomment the function getAllPostsandComments
  //   function backupHeroFunction() {
  //     setPosts(backupPostsWithComments);
  //   }
  //   backupHeroFunction();
  // }, [rerender]);

  useEffect(() => {
    //if the database is down, comment out this useEffect, and uncomment the one above it
    async function getData() {
      const response = await fetch("http://localhost:3000/api/posts");
      const data = await response.json();
      setPosts([...data.payload]);
      setReversePosts(posts.slice().reverse())
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
      <div className="posts-wrapper">
        <div className="post-container">
          <ul>
            {reversePosts?.map(function (post) {
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
      <div className="fix-btn-div">
        <a href="#top">
          <button className="fix-button" type="button">
            Back to Top
          </button>
        </a>
      </div>
    </div>
  );
}

export default Forum;
