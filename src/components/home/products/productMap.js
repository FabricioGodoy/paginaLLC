import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductMap = ({ stock }) => {
  console.log(stock);
  return (
    <Container className="my-5 t">
      <h1>Products</h1>
      <div>
        {stock.map((article) => (
          <article key={article.id}>
            <img src={article.img} />
            <section>
              <h3>{article.ean}</h3>
              <p>{article.caracteristicas}</p>
              <Link to={`/detailProduct/${article.id}`}>
                <button>More Info</button>
              </Link>
            </section>
          </article>
        ))}
      </div>
    </Container>
  );
};
