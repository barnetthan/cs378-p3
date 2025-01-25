import React, { useState } from "react";
import "../App.css";

const MenuModal = ({
  open,
  setOpen,
  quantities,
  setQuantities,
  orderTotal,
  setOrderTotal,
  menu,
}) => {
  const [orderComplete, setOrderComplete] = useState(false);

  if (!open) {
    return null;
  }

  function handleOrder() {
    // setOrderTotal(0);
    // setQuantities(Array(menu.length).fill(0));
    setOrderComplete(true);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-window">
        <div className="popup-header">
          <h1>Order Details</h1>
        </div>
        {orderComplete ? (
          <div
            style={{ height: "100%" }}
            className="d-flex flex-column justify-content-evenly align-items-center"
          >
            <div>
              Your order has been sent to the kitchen and will be ready soon!
            </div>
            <button
              onClick={() => {
                setOpen(false);
                setOrderComplete(false);
              }}
              className="general-button-green"
            >
              Ok
            </button>
          </div>
        ) : (
          <>
            <div style={{ overflowX: "hidden" }} className="popup-content">
              {orderTotal == 0 ? <>Cart is empty like your stomach!</> : <></>}
              <ul style={{ paddingLeft: "16px" }}>
                {quantities.map((quantity, index) => {
                  if (quantity > 0) {
                    return (
                      <div className="row">
                        <div className="col-10">
                          <li>
                            {menu[index].title} - ${menu[index].price}
                          </li>
                        </div>
                        <div className="d-flex justify-content-center col-2">
                          <span>{quantity}</span>
                        </div>
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="popup-footer">
              <div className="d-flex justify-content-center">
                <b>
                  Total: ${orderTotal},{" "}
                  {quantities.reduce((acc, val) => acc + val, 0)} Item(s)
                </b>
              </div>
              <div className="d-flex justify-content-evenly">
                <button
                  className="general-button-red"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="general-button-green"
                  onClick={handleOrder}
                  disabled={orderTotal == 0}
                >
                  Confirm
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuModal;
