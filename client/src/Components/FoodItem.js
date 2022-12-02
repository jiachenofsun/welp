import axios from "axios";
import "./FoodItem.css";
import React, { useState, useEffect } from "react";
import { IconButton } from '@chakra-ui/react'
import { ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'



function FoodItem({title, initialRating, location, time, func}) {
    const [rating, setRating] = useState(initialRating);
    const upvote = () => {
      axios
        .post("http://localhost:9000/fetchMenu/upvote", {name:title, time, location})
        .then((res) => {func(res.data.menu); setRating(rating + 1); console.log(res.data.menu)})
        .catch((error) => console.log(error));
    }
    const downvote = () => {
      axios
        .post("http://localhost:9000/fetchMenu/downvote", {name:title, time, location})
        .then((res) => {func(res.data.menu); setRating(rating - 1); console.log(res)})
        .catch((error) => console.log(error));
    }
    return (
      <div class="overallContainer">
       <div class="ratingContainer">
       <p class="rating" style={{color: rating >= 0 ? 'rgb(65, 192, 255)' : 'darksalmon'}}>{rating}</p>
       </div>
       <IconButton class="btn" aria-label='upvote' icon={<ArrowUpIcon />} onClick={() => upvote()} />
       <IconButton class="btn" aria-label='downvote' icon={<ArrowDownIcon />} onClick={() => downvote()} />
       <h3 class="title">{title}</h3>
      </div>
    );
  }
  
  export default FoodItem;