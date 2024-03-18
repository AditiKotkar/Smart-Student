import React from 'react';
import './App.css';
import logo from "./images/Attendence4.png"

function Attendence() {
  return (
<div className="contener">
            <div className="img">
                <img src= {logo} />
            </div>
            <h1>Attendence Sheet</h1>
        </div>
  );
}

export default Attendence;