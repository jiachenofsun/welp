// import "./Menu.css";

import React from "react";

function Comment({author, message, timestamp}) {

    return (
      <div>
        <div>Author: {author}</div>
        <div>Timestamp: {timestamp}</div>
        <div>Message: {message}</div>
      </div>

    );
  }
  
  export default Comment;