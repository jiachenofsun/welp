// import "./Menu.css";

import React from "react";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";

function CommentsSection() {

    return (
      <div class="parentContainer" style={{display:"flex", justifyContent: "center", paddingBottom: 100}}>
       <p class="menuText" style={{paddingRight: 20}}>Comments</p>
       <CommentForm></CommentForm>
       <CommentFeed></CommentFeed>
      </div>

    );
  }
  
  export default CommentsSection;