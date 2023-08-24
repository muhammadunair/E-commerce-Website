import React, { useState } from "react";
import Productdetail from "./productdetail";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import "./product.css";
const Product = () => {
  const [product, setProduct] = useState(Productdetail);
  const fillterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const Allproducts = () => {
    setProduct(Productdetail);
  };
  return (
    <>
      <div className="products">
        <h2># Products</h2>
        <p>Home . Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => Allproducts()}>All Product</li>
                <li onClick={() => fillterproduct("Tablet")}>Tablet</li>
                <li onClick={() => fillterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => fillterproduct("Headphone")}>HeadPhone</li>
                <li onClick={() => fillterproduct("Camera")}>Camera</li>
                <li onClick={() => fillterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product && product.length ? (
                product.map((curElm) => {
                  return (
                    <>
                      <div className="box" key={curElm.id}>
                        <div className="img_box">
                          <img src={curElm.Img} alt="image" />
                          <div className="icon">
                            <li>
                              <AiOutlineShoppingCart />
                            </li>
                            <li>
                              <BsEye />
                            </li>
                            <li>
                              <AiOutlineHeart />
                            </li>
                          </div>
                        </div>
                        <div className="detail">
                          <p>{curElm.Cat}</p>
                          <h3>{curElm.Title}</h3>
                          <h4>${curElm.Price}</h4>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <p>Pleas wait.....</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
