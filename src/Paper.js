import React from 'react';
import './App.css';
import logo from "./images/Qpaper6.png"

function Paper() {
  return (
    <div className="contener">
    <div className="img">
        <img src={logo} />
    </div>
    <h1>Previous Year Question Paper</h1>
</div>
  );
}

export default Paper;