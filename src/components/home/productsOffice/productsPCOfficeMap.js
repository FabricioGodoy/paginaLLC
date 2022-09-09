import React from "react";
import { Link } from "react-router-dom";
import "./productsPCOffice.css";
import SlickPCOffice from "./sliderProductsPCOffice";

export const ProductMap = ({ stock }) => {
  return (
    <>
      <h1 className="titleProduct">PC's Office</h1>
      <div className="containerProduct">
        {stock.map((article) => (
          <article key={article.id} className="productContainer">
             <Link to={`/detailProductOffice/${article.id}`} className="linkProduct">
            <SlickPCOffice className="SliderContainer"/>
            <section className="descriptionContainer">
              <p>{article.category}</p>
              <h3>{article.name}</h3>
              <div className="buttonContainer">
                <Link to={`/detailProductOffice/${article.id}`}>
                  <button className="buttonProductContainer">More Info</button>
                </Link>
                <Link to={`#`}>
                  <button className="buttonProductContainer">Buy it Now</button>
                </Link>
              </div>
            </section>
            </Link>
          </article>
        ))}
      </div>
      <div className="containerBackButtonOffice">
        <Link to={"/"}>
          <button className="buttonBackButtonOffice">Back</button>
        </Link>
      </div>
    </>
  );
};