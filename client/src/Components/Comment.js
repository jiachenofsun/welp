// import "./Menu.css";

import React from "react";

function Comment({author, message, timestamp, upvotes, downvotes}) {

    return (
      <div>
        <div>Author: {author}</div>
        <div>Timestamp: {timestamp}</div>
        <div>Message: {message}</div>
        <div> Upvotes: {upvotes} </div>
        <div> Downvotes: {downvotes} </div>
      </div>

    );
  }
  
  export default Comment;