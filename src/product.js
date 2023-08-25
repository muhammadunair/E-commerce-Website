import React from "react";
import Productdetail from "./productdetail";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./product.css";
const Product = ({ product, setProduct, detail , view , close , setClose }) => {

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
    <>{
      close ? 
      <div className="product_detail">
        <div className="container">
          <button onClick={() => setClose(false)} className="closebtn"><AiOutlineClose/></button>
          {
            detail.map((prod) => {
              return (
                <div className="productbox">
                  <div className="img_box">
                    <img src={prod.Img} alt="image" />
                  </div>
                  <div className="detail">
                    <h4>{prod.Cat}</h4>
                    <h2>{prod.Title}</h2>
                    <p>A Screen Everyone Will Love : Whether your family is streaming or video chatting with friends tablet A8...</p>
                    <h3>{prod.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> : null
    }
    
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
                <li onClick={() => fillterproduct("Smart Watch")}>Smart Watch
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
                            <li onClick={() => view(curElm)}>
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
