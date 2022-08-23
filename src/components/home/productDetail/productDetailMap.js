import React from "react";
import { Link } from "react-router-dom";
import "./productDetail.css";
import SlickPCOfficeDetails from "../productDetail/sliderProductDetail";

export const ProductDetailMap = ({ product }) => {
  return (
    <div>
      {" "}
      <h2 className="titleDetailProduct"> Product Detail </h2>
        <hr />
      <div className="containerProductDetail">
          {product.map((article) => (
            <section key={article.id}>
              <article  className="containerListDetail">
                  <SlickPCOfficeDetails />
                  <div className="containerList">
                  {article.caracteristicas.map((data) => (
                    <li className="listDetail">{data}</li>
                  ))}
                  </div>
              </article>
              <hr />
              <div className="containerButtonDetailProduct">
                <Link to={`/`}>
                  <button className="buttonDetailProduct">Back</button>
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
