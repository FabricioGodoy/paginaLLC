import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductDetailMap = ({ product }) => {
  return (
    <Container className="my-5">
      <h2> Product Detail </h2>
      <hr />
      <Row>
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
              <button>Back</button>
            </Link>
          </section>
        ))}
      </Row>
    </Container>
  );
};

