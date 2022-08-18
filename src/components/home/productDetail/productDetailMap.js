import React from "react";
import { Link } from "react-router-dom";

export const ProductDetailMap = ({ product }) => {
  return (
    <div className="my-5">
      <h2> Product Detail </h2>
      <hr />
      <div>
        {product.map((article) => (
          <section key={article.id}>
            <article >
              <div>
                <img src={article.img} alt="img article" />
              </div>
              <br />
              <br />
              <div>
                {article.caracteristicas.map((data) => (
                  <li >{data}</li>
                ))}
              </div>
            </article>
            <hr />
            <Link to={`/`}>
              <button className="buttonProductContainer">Back</button>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

