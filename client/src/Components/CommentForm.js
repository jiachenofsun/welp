import axios from "axios";
import React, { useState, useEffect } from "react";

function CommentForm({setComments}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const newComment = () => {
    axios
      .post("http://localhost:9000/comments", {author:name, message, timestamp:new Date().toDateString()})
      .then((res) => {setComments(res.data.comments);})
      .catch((error) => console.log(error));
  }

  return (
    <div className="p-5 pt-12">
      <input value={name} onChange={event => setName(event.target.value)} className="border rounded-lg placeholder-gray-400 dark:placeholder-gray-600 bg-strong first-line:border-gray-200 dark:border-gray-600 text-strong w-96 placeholder:animate-none h-9 p-4 mb-4" placeholder="Nickname" type="text"/>
      <input value={message} onChange={event => setMessage(event.target.value)} className="border rounded-lg placeholder-gray-400 dark:placeholder-gray-600 bg-strong first-line:border-gray-200 dark:border-gray-600 text-strong w-96 placeholder:animate-none p-3.5 h-5 py-20" placeholder="Write your review..." type="text"/>
      <button className="absolute -translate-x-14 translate-y-28 min-w-min-36" type="submit" 
      onClick={newComment}><img className="h-9" src="send.png" alt="send.png"/></button>
    </div>

  );
}

export default CommentForm;