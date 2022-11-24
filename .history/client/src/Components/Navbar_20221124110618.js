// import "./Menu.css";

import React from "react";

function Navbar() {

    return (
      <div style={{ display: "flex", alignSelf: "flex-end", width: "100%", paddingTop:20, paddingBottom: 20, borderBottom: "solid gray 1px"}}>
        <div className="text-5xl gap-1 font-bold" style={{marginLeft: 20}}>Welp</div> 
        <div style={{marginLeft: 10, marginTop:30}}>Yelp for Cal Dining</div>
        <button style={{right:0, marginLeft:"auto", marginRight:30, fontSize: 30}}>About</button>
      </div>

    );
  }
  
  export default Navbar;