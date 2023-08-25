import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./home.css";
import { FaTruckMoving } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { HiReceiptPercent } from "react-icons/hi2";
import { BiHeadphone } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Homeproduct from "./homeproduct";
const Home = ({ detail, view, close, setClose }) => {
  const [homeproduct, setHomeProduct] = useState(Homeproduct);
  return (
    <>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Colletion 2023</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="image/slider-img.png" alt="image" />
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="image/Mobile phone.png" alt="image" />
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="image/smart watch.png" alt="image" />
            </div>
            <div className="detail">
              <p>18 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="image/headphone.png" alt="image" />
            </div>
            <div className="detail">
              <p>52 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="image/tp6.png" alt="image" />
            </div>
            <div className="detail">
              <p>63 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FaTruckMoving />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Oder above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <HiReceiptPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Oder</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeproduct && homeproduct.length ? (
            homeproduct.map((curElm) => {
              return (
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
              );
            })
          ) : (
            <p>Pleas wait .......</p>
          )}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple ipad 10.2 9th Gen - 2021</h3>
            <p>
              {" "}
              <BiDollar /> 986{" "}
            </p>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="image/slider-img.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
