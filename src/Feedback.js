import React from 'react';
import './App.css';
import logo from "./images/feedback8.png"

function Feedback() {
  return (
    <div className="contener">
    <div className="img">
        <img src= {logo}/>
    </div>
    <h1>Feedback of Teacher</h1>
</div>
  );
}

export default Feedback;