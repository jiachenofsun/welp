// import "./Menu.css";
import axios from "axios";
import React, {useEffect, useState} from "react";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";


function CommentsSection() {
  const [comments, setComments] = useState();
  const getCommentsData = () => {
    axios
      .get("http://localhost:9000/comments") //THIS IS YOUR URL OF YOUR API
      .then((data)=>{setComments(data.data.comments)}) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
      .catch((error) => console.log(error));  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
  };
  
  useEffect(() => {
    getCommentsData();
  }, [])

  return (
    <>
      <div class="parentContainer" style={{display:"flex", justifyContent: "center", paddingBottom: 20}}>
      <p class="menuText" style={{paddingRight: 20}}>Comments</p>
      <CommentForm setComments={setComments}></CommentForm>
      
      </div>
      <CommentFeed comments={comments} setComments={setComments}></CommentFeed>
      
    </>
  );
}

export default CommentsSection;