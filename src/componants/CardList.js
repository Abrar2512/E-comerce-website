import React, { useEffect, useState } from "react";
import "../App.css";

const CardList = ({ card }) => {
  const [Cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const handleRemove = (index) => {
    const copy = [...Cart];
    copy.splice(index, 1);
    setCart(copy);
    setShowAlert(true);

    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    setCart(card);
  }, [card]);

  return (
    <div className="container">
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          Product Remove In To The Cart
        </div>
      )}
      <div className="row">
        {Cart.map((carItem, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 my-4" key={index}>
            <div className="card card-small shadow">
              <img
                src={carItem.url}
                alt={carItem.name}
                className="card-image"
              />
              <div className="card-content mx-3">
                <h3 className="card-title">{carItem.name}</h3>
                <div className="card-quantity">
                  <button
                    className="btn btn-primary quantity-button"
                    onClick={() => {
                      const _Cart = Cart.map((item, i) => {
                        return index === i
                          ? {
                              ...item,
                              quantity:
                                item.quantity > 0 ? item.quantity - 1 : 0,
                            }
                          : item;
                      });
                      setCart(_Cart);
                    }}
                  >
                    -
                  </button>
                  <b className="quantity mx-2">{carItem.quantity}</b>
                  <button
                    className="btn btn-primary quantity-button mx-1"
                    onClick={() => {
                      const _Cart = Cart.map((item, i) => {
                        return index === i
                          ? { ...item, quantity: item.quantity + 1 }
                          : item;
                      });
                      setCart(_Cart);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn quantity-button remove-button"
                    onClick={(e) => {
                      handleRemove(index);
                    }}
                  >
                    Remove
                  </button>
                </div>
                <p className="card-price ">
                  Price: Rs. {carItem.price * carItem.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2
        className="total text-center my-2"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        Total:{" "}
        <span>
          {Cart.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </span>
      </h2>
    </div>
  );
};

export default CardList;
