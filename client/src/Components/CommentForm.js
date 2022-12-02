
import React from "react";

function CommentForm() {

    return (
      <div className="p-5 pt-12">
       <div><input className="border rounded-lg placeholder-gray-400 dark:placeholder-gray-600 bg-strong first-line:border-gray-200 dark:border-gray-600 text-strong w-96 placeholder:animate-none h-9 p-4 mb-4" placeholder="Nickname" type="text"/></div>
       <input className="border rounded-lg placeholder-gray-400 dark:placeholder-gray-600 bg-strong first-line:border-gray-200 dark:border-gray-600 text-strong w-96 placeholder:animate-none p-3.5 h-5 py-20" placeholder="Write your review..." type="text"/>
       <button className="absolute -translate-x-14 translate-y-28 min-w-min-36" type="submit" ><img className="h-9" src="send.png"/></button>
      </div>

    );
  }
  
  export default CommentForm;