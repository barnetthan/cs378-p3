import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div class="row menu-item">
      <div class="col-4">
        <img
          class="menu-img"
          src={`${process.env.PUBLIC_URL}/images/${item.imageName}`}
          alt={`Image of ${item.title}`}
        />
      </div>
      <div class="col-8 menu-text">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div class="row">
          <div class="col-8">
            <b>{item.price}</b>
          </div>
          <div class="col-2">
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
