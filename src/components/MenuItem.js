import React, {useState} from "react";

const MenuItem = ({ item, total, setTotal, quantities, setQuantities, i }) => {

  function handleIncrement() {
    let arr = [...quantities];
    arr[i]++;
    setTotal(Math.round((total + item.price) * 100) / 100);
    setQuantities(arr);
  }

  function handleDecrement() {
    if (quantities[i] > 0) {
      let arr = [...quantities];
      arr[i]--;
      setTotal(Math.round((total - item.price) * 100) / 100);
      setQuantities(arr);
    }
  }

  return (
    <div className="row menu-item">
      <div className="col-4">
        <img
          className="menu-img"
          src={`${process.env.PUBLIC_URL}/images/${item.imageName}`}
          alt={`Image of ${item.title}`}
        />
      </div>
      <div className="col-8 menu-text">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="row">
          <div className="col-7">
            <b>{item.price}</b>
          </div>
          <div className="col-2 d-flex">
            <button onClick={() => {handleDecrement()}}>-</button>
            {quantities[i]}
            <button onClick={() => {handleIncrement()}}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
