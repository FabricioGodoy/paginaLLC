import React from "react";
import { Link } from "react-router-dom";
import "./productDetail.css";
import SlickPCOfficeDetails from "./sliderProductDetail";

export const ProductDetailMap = ({ product }) => {
  return (
    <div>
      {" "}
      <h2 className="titleProductFeature"> Product Detail </h2>
      <hr />
      <div className="containerProductDetail">
        {product.map((article) => (
          <section key={article.id}>
            <article className="containerListDetail">
              <SlickPCOfficeDetails />
              <div className="containerList">
                {article.caracteristicas.map((data) => (
                  <li className="listDetail">{data}</li>
                ))}
              </div>
            </article>
            <hr />
            <div className="containerButtonDetailProduct">
              <Link to={"/ProductsOffice"}>
                <button className="buttonDetailProduct">
                  <span>Back</span>
                  {" "}
                </button>
              </Link>
              <Link to={`#`}>
                <button className="buttonDetailProduct">Buy it Now</button>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
