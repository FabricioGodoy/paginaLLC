import React from "react";
import { Link } from "react-router-dom";
import "./productDetail.css";

export const ProductDetailMap = ({ product }) => {
  return (
    <>
      {" "}
      <h2 className="titleDetailProduct"> Product Detail </h2>
      <div className="containerProductDetail">
        <hr />
        <div>
          {product.map((article) => (
            <section key={article.id} className="containerDetail">
              <article  className="containerListDetail">
                  <img
                    src={article.img}
                    className="imgDetailProduct"
                    alt="img article"
                  />
                  {article.caracteristicas.map((data) => (
                    <li className="listDetail">{data}</li>
                  ))}
              <hr />
              </article>
              <div className="containerButtonDetailProduct">
                <Link to={`/`}>
                  <button className="buttonDetailProduct">Back</button>
                </Link>
                <Link to={`/detailProduct/${article.id}`}>
                  <button className="buttonDetailProduct">Buy it Now</button>
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
