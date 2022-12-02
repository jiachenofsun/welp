import axios from "axios";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";

function CommentFeed() {
    const [comments, setComments] = useState();
    const getCommentsData = () => {
      axios
        .get("http://localhost:9000/comments") //THIS IS YOUR URL OF YOUR API
        .then((data)=>{setComments(data.data.comments); console.log("received comments", data.data.comments)}) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
        .catch((error) => console.log(error));  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
    };
    
    useEffect(() => {
      getCommentsData();
    }, [])

    return (
        <div style={{paddingBottom: 50}}>
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
        </div>
        {
          comments && comments.map(d =>
            <Comment author={d.author} message={d.message} timestamp={d.timestamp} upvotes={d.upvotes} downvotes={d.downvotes} />
          )
        }
        <Comment author="arjun" message="poggers foomd yummy yes" timestamp="2022" upvotes="5" downvotes="3"></Comment>
        <Comment author="arjun" message="poggers foomd yummy yes asdfj l;asdjf lasdjf sdl fjlsdk jlkdsj lkjsd lj" timestamp="2022" upvotes="5" downvotes="3"></Comment>
        </div>
    );
  }
  
  export default CommentFeed;