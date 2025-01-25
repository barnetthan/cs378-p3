import { useState } from "react";
import "./App.css";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
import MenuModal from "./components/MenuModal";

import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: "Gyoza",
    description: "Japanese dumplings",
    imageName: "gyoza.png",
    price: 5.99,
  },
  {
    id: 2,
    title: "Sushi",
    description: "Japanese rice rolls",
    imageName: "sushi.png",
    price: 6.99,
  },
  {
    id: 3,
    title: "Ramen",
    description: "Japanese noodle soup",
    imageName: "ramen.png",
    price: 7.99,
  },
  {
    id: 4,
    title: "Matcha Cake",
    description: "Japanese green tea cake",
    imageName: "matcha-cake.png",
    price: 4.99,
  },
  {
    id: 5,
    title: "Mochi",
    description: "Japanese rice cake",
    imageName: "mochi.png",
    price: 3.99,
  },
  {
    id: 6,
    title: "Yakitori",
    description: "Japanese skewered chicken",
    imageName: "yakitori.png",
    price: 2.99,
  },
  {
    id: 7,
    title: "Takoyaki",
    description: "Japanese octopus balls",
    imageName: "takoyaki.png",
    price: 5.99,
  },
  {
    id: 8,
    title: "Sashimi",
    description: "Japanese raw fish",
    imageName: "sashimi.png",
    price: 8.99,
  },
  {
    id: 9,
    title: "Okonomiyaki",
    description: "Japanese savory pancake",
    imageName: "okonomiyaki.png",
    price: 6.99,
  },
  {
    id: 10,
    title: "Katsu Curry",
    description: "Japanese curry with fried pork",
    imageName: "katsu-curry.png",
    price: 9.99,
  },
];

function App() {
  const [orderTotal, setOrderTotal] = useState(0);
  const [quantities, setQuantities] = useState(Array(menuItems.length).fill(0));
  const [modalOpen, setModalOpen] = useState(false);

  function handleClear() {
    setOrderTotal(0);
    setQuantities(Array(menuItems.length).fill(0));
  }

  return (
    <div>
      <MenuHeader />
      <MenuModal
        open={modalOpen}
        setOpen={setModalOpen}
        quantities={quantities}
        setQuantities={setQuantities}
        orderTotal={orderTotal}
        setOrderTotal={setOrderTotal}
        menu={menuItems}
      />
      <div
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container center row d-flex" id="menu-list">
          {menuItems.map((item, index) => {
            return (
              <MenuItem
                item={item}
                total={orderTotal}
                setTotal={setOrderTotal}
                quantities={quantities}
                setQuantities={setQuantities}
                i={index}
              />
            );
          })}
        </div>
      </div>
      <div className="center d-flex justify-content-evenly mb-5">
        <b>Subtotal: ${orderTotal.toFixed(2)}</b>
        <button className="general-button-red" onClick={handleClear}>
          Clear All
        </button>
        <button
          className="general-button-green"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default App;
