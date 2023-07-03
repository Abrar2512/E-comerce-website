import React, { useEffect, useState } from "react";
import "../App.css";

const ProductList = ({ product, addToCard }) => {
  const [allProducts, setallProducts] = useState(product);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleopen = (item) => {
    setSelectedProduct(item);
  };

  const handleAddToCart = (item) => {
    addToCard(item);
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="container">
      {showAlert && (
        <div className="alert alert-warning" role="alert">
          Product Added to the Cart
        </div>
      )}

      <div className="border bg-danger text-center">.</div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {product.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index.toString()}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {product.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                width="1150px"
                height="400px"
                src={item.url}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h4 className="text-black">SHOPPING ANY TIME ANYWHERE</h4>
                <p className="text-black">
                  Some Representative Shopping Places are Here. Shop for
                  Anything Anywhere.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row">
        {product.map((item, i) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 carr" key={i}>
              <div className="card shadow">
                <img src={item.url} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.name} | {item.category}
                  </h5>
                  <p className="card-text">{item.seller}</p>
                  <p className="card-text">Price: Rs. {item.price}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleopen(item)}
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {selectedProduct && selectedProduct.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {selectedProduct && (
              <div className="modal-body">
                <img
                  src={selectedProduct.url}
                  alt={selectedProduct.name}
                  className="card-img-top"
                />
                <p>Seller : {selectedProduct.seller}</p>
                <p>Category : {selectedProduct.category}</p>
                <p>Price : Rs. {selectedProduct.price}</p>
                {/* Add any other product details you want to display */}
              </div>
            )}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
