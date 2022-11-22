import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Menu from "./Components/Menu";


function App() {
  const [expressCheck, setExpressCheck] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:9000/testAPI`)
      .then((res) => {
        setExpressCheck(res.data);
        console.log(res.data);
      })
      .catch(() => setExpressCheck("Currently down."));
  }, []);

  return (
    <div className="App">
    <div> Welp! </div>
    <Menu/>
        <div className="border rounded border-gray-500 bg-slate-700 p-4 text-white">
          <h1>Express</h1>
          <p className="text-lg py-2">
            <a className="text-pink-300" href="https://expressjs.com/">
              Express
            </a>{" "}
            is a Node.js web app framework. To create new routes, add files to api/routes. Feel free to use testAPI.js (which is where "Working properly" is being pulled from) as a reference
          </p>
        
          <div className="flex gap-2 text-center justify-center">
            <p className="text-sm font-bold">Express Status:</p>
          <p className="text-sm">{expressCheck}</p>
          
          </div>
        </div>
    </div>
  );
}

export default App;
