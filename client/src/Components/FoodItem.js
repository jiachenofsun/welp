import axios from "axios";
import React, { useState, useEffect } from "react";

function FoodItem({title, initialRating, func}) {
    const [rating, setRating] = useState(initialRating);
    const updateRating = (newRating) => {
        //axios post request?
        setRating(newRating);
      }

    return (
    <div style={{ textAlign: 'center', marginBottom: '12px'}}>
        <h3 style={{fontSize:40}}>
        {title}
        </h3>
        <p>{rating}</p>
        <button style={{ margin: '4px'}} onClick={() => updateRating(rating + 1)}>
      Incr
    </button>
    <button style={{ margin: '4px'}} onClick={() => updateRating(rating - 1)}>
      Decr
    </button>

    </div>
    );
  }
  
  export default FoodItem;