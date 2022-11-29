// import "./Menu.css";

import React from "react";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";

function CommentsSection() {

    return (
      <div style={{display:"flex", justifyContent: "center", paddingBottom: 100}}>
       <p style={{paddingRight: 250, fontSize: 70}}>Comments</p>
       <CommentForm></CommentForm>
       <CommentFeed></CommentFeed>
      </div>

    );
  }
  
  export default CommentsSection;