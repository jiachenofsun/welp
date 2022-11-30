import axios from "axios";
import React, { useState, useEffect } from "react";

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
    <div style={{ textAlign: 'center', marginBottom: '12px'}}>
        <h3 style={{fontSize:40}}>
        {title}
        </h3>
        <p>{rating}</p>
        <button style={{ margin: '4px'}} onClick={() => upvote()}>
      Incr
    </button>
    <button style={{ margin: '4px'}} onClick={() => downvote()}>
      Decr
    </button>

    </div>
    );
  }
  
  export default FoodItem;