import { useState } from "react";
import "./App.css";
import Header from "./componants/Header";
import ProductList from "./componants/ProductList";
import CardList from "./componants/CardList";

function App() {
  const [product, setProduct] = useState([
    {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "HeadPhones",
      category: "Electronics",
      seller: "AB sayyed Ltd",
      price: 500,
    },
    {
      url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: " Camera",
      category: "Electronics",
      seller: "Camron LTD",
      price: 4000,
    },
    {
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Nike  Shoes",
      category: "Fation",
      seller: "Fasion LTD",
      price: 4500,
    },
    {
      url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      name: "TRQ White Shoes",
      category: "Shoes",
      seller: "AMZ Seller Ghz",
      price: 1999,
    },
    {
      url: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
      name: "LOREM Watch Black",
      category: "Watches",
      seller: "Watch Ltd Siyana",
      price: 2599,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
      name: "AMZ Laptop 8GB RAM",
      category: "Laptops",
      seller: "Delhi Laptops",
      price: 50000,
    },
    {
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Goggles",
      category: "Fashion",
      seller: "ABd brand Ltd",
      price: 3500,
    },

    {
      url: "https://images.unsplash.com/photo-1529498933046-3b8c8c19407d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Watch ",
      category: "Watches",
      seller: "Watch Ltd",
      price: 2000,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU",
      name: "Cup red Color",
      category: "Cup",
      seller: "ABS Ltd",
      price: 100,
    },
  ]);
  const [card, setCard] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const addToCard = (data) => {
    setCard([...card, { ...data, quantity: 1 }]);
    console.log([...card, { ...data, quantity: 1 }]);
  };
  const handleShow = (value) => {
    setShowCard(value);
  };
  return (
    <>
      <div>
        <Header count={card.length} handleShow={handleShow} />
        {showCard ? (
          <CardList card={card} />
        ) : (
          <ProductList product={product} addToCard={addToCard} />
        )}
      </div>
    </>
  );
}

export default App;
