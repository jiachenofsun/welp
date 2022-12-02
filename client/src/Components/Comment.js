import axios from "axios";
import "./comments.css";
import { IconButton } from '@chakra-ui/react'
import { ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'

import React from "react";

function Comment({author, message, timestamp, upvotes, downvotes, setComments}) {
    const upvote = () => {
      axios
        .post("http://localhost:9000/comments/upvote", {author, timestamp})
        .then((res) => {setComments(res.data.comments);})
        .catch((error) => console.log(error));
    }
    const downvote = () => {
      axios
      .post("http://localhost:9000/comments/downvote", {author, timestamp})
      .then((res) => {setComments(res.data.comments);})
      .catch((error) => console.log(error));
    }
    return (
       <div class="overallContainer" style={{width:500, margin:'auto', marginBottom:15}}>
       <div class="ratingContainer">
       <p class="rating" style={{color: upvotes-downvotes >= 0 ? 'rgb(65, 192, 255)' : 'darksalmon'}}>{upvotes-downvotes}</p>
       </div>
       <IconButton class="btn" aria-label='upvote' icon={<ArrowUpIcon />} onClick={upvote} />
       <IconButton class="btn" aria-label='downvote' icon={<ArrowDownIcon />} onClick={downvote} />
       <div className="ml-10 w-100">
       <h3 class="author">{author}</h3>
       <h4>{message}</h4>
       </div>
     </div>

    );
  }
  
  export default Comment;