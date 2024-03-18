import React from 'react';
import './App.css';
import logo from "./images/result10.png"

function Results() {
  return (
    <div className="contener">
            <div className="img">
                <img src={logo} />
            </div>
            <h1>Results</h1>
        </div>
  );
}

export default Results;