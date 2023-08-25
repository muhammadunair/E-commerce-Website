import React, { useState } from "react";
import Nav from "./nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./rout";
import Footer from "./footer";
import Productdetail from "./productdetail";
const App = () => {
  // Product Detail 
  const [close , setClose] = useState(false)
  const [detail , setDetail] = useState([])
  // Filter Product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  };
  // Product Detail
  const view = (product) => {
     setDetail([{...product}])
     setClose(true)
  }
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
