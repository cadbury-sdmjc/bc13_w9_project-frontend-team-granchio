import React, { useState, useEffect } from "react";
import CreatePost from "../Create-Post/create-post";
import Post from "../Post/post";
import "./forum.css";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [rerender, setRerender] = useState(true);

  //   useEffect(() => { //if you have uncommented this because the db is down, scroll to the bottom, and uncomment the function getAllPostsandComments
  //   function backupHeroFunction() {
  //     const backupStatePosts = getAllPostsandComments();
  //     setPosts(backupStatePosts);
  //   }backupHeroFunction()
  // }, [rerender])

  useEffect(() => {
    //if the database is down, comment out this useEffect, and uncomment the one above it
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

const backupPosts = [
  {
    post_id: 1,
    post_title: "Struggling with React, Its well ard!",
    post_content:
      "I am having a very rough time understand props and how they can just magic around everywhere like they were made by Gandalf. It just makes no sense to me sometimes, I feel I would have more luck if this was in the context of a particularly good fantasy novel such as Wise Mans Fear.",
    duck_name: "Dave Duck",
    post_created: "err.",
  },
  {
    post_id: 2,
    post_title: "Struggling with CSS",
    post_content:
      "Who created CSS? What is this utter, utter monstrosity. I have seen horror films that have given me less PTSD than these CSS rules of chaos. Sometimes I wake up in a cold sweat, and I am not sure if my div classes are in my flex boxes or my flex boxes are in my div classes and my pictures have eyes where their noses are supposed to be and my buttons are just notwhere near where the the user is looking please dear internet Lords help me out.",
    duck_name: "Tophat Duck",
    post_created: "err.",
  },
  {
    post_id: 3,
    post_title:
      "Struggling with the sudden change of pace after 15 years of a different career",
    post_content:
      "Hello Anon Ducks! I started off strong and now I just feel like my brain is turning into an assorted pile of over-boiled mashed potato and over-steamed vegetable. I have spent so long delivering lectures on the best way to make toad in the hole with bananas instead of sausages and it is all I have known for most of my adult life. Suddenly, my banana toad in the hole is irrelevant! And I have got props coming out my this, and callbacks coming out my that, and my ears are bleeding javascript! How are you guys coping with this sudden and beautiful change in your daily lives? Much love, Other Anon Duck",
    duck_name: "Yellow Duck",
    post_created: "err.",
  },
];

const backupComments = [
  {
    comment_id: 2,
    post_id: 1,
    duck_name: "Anon Duck",
    comment_content:
      "look at the React docs my dude, that is what they are there for",
    post_created: "err.",
  },
  {
    comment_id: 2,
    post_id: 1,
    duck_name: "Kanye Duck",
    comment_content:
      "I am the ying and the yang, the ultimate and unmatched duck. You can kinda sidestep a lot of the CSS by just googling and robbing buttons and things from the internet, like a proper developer.",
    post_created: "err.",
  },
  {
    comment_id: 2,
    post_id: 3,
    duck_name: "Trenchfoot Duck",
    comment_content:
      "look at the freecodecamp website it has so much on there! I hear you on the brainmelt, I wake up and I swear I see HTML on my pillow that has leaked out my ear",
    post_created: "err.",
  },
];

// function getAllPostsandComments() {
//   const allPosts = backupPosts;
//   const allComments = backupComments;
//   return allPosts.rows.map((post) => {
//     return {
//       ...post,
//       comments: allComments.rows.filter((c) => c.post_id === post.post_id),
//     };
//   });
// }

export default Forum;
