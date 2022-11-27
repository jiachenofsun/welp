import axios from "axios";
import React, { useState, useEffect } from "react";

function FoodItem({title, rating }) {


    return (
    <div style={{ textAlign: 'left', marginBottom: '12px'}}>
        <h3>
        {title}
        </h3>

    </div>
    );
  }
  
  export default FoodItem;