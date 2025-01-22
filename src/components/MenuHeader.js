import React from "react";
import "../App.css";

const MenuHeader = () => {
  return (
    <>
      <div class="center">
        <img id="logo" src="/images/logo.png" alt="Han's Wok restaraunt logo" />
      </div>
      <div class="center col-12">
        <h2 id="special-font">Authentic Japanese Cuisine</h2>
      </div>
      <div class="center col-12">
        <h1>UT's best Asian food!</h1>
      </div>
    </>
  );
};

export default MenuHeader;
