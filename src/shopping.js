import React from "react";
import "./shopping.css";
const Shopping = () => {
  return (
    <div className="main">
      <div className="primary">
        <div className="heading">
          <h1>productsearch</h1>
        </div>
        <div className="search">
          <input type="search" />
        </div>
        <div className="searchbtn">
          <button className="search">search</button>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Shopping;
