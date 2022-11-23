import { useState, useEffect } from 'react';
import CreatePost from '../Create-Post/create-post';
import Post from '../Post/post';
//const [post, setPost] = useState([{ author: "", content: ""
//}])
//render List of Postst using map()

//use effect to fetch data
//put data into state 
//render stuff from state 
  //posts level - retrieve postobject from data and hand in to mapping bit


  // {
  //   "postkey": {
  //       "post_id": 1,
  //       "post_title": "Struggling with React, Its well ard",
  //       "post_content": "post content",
  //       "user_id": 1,
  //       "post_created": "2022-11-23T10:18:51.185Z"
  //   }
 

function Forum() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    async function getData (){
      const response = await fetch('http://localhost:3000/api/posts')
      const data = await response.json()
      const postResults = data.payload.filter(postsFilter)
      function postsFilter(i){
        return data.payload[i] === 0
      }
      console.log(postResults)
    } getData()
  }, [])

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
