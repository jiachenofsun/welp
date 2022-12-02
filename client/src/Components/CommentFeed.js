
import React from "react";
import Comment from "./Comment";

function CommentFeed({comments, setComments}) {

    return (
        <div style={{paddingBottom: 50}}>
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
        </div>
        {
          comments && comments.map(d =>
            <Comment author={d.author} message={d.message} timestamp={d.timestamp} upvotes={d.upvotes} downvotes={d.downvotes} setComments={setComments}/>
          )
        }

        </div>
    );
  }
  
  export default CommentFeed;