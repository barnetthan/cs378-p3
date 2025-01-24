import React from "react";
import "../App.css";

const MenuHeader = () => {
  return (
    <>
      <div className="center">
        <img id="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Han's Wok restaraunt logo" />
      </div>
      <div className="center col-12">
        <h2 id="special-font">Authentic Japanese Cuisine</h2>
      </div>
      <div className="center col-12">
        <h1>UT's best Asian food!</h1>
      </div>
    </>
  );
};

export default MenuHeader;
