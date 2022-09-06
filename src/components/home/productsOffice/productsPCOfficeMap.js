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
          </article>
        ))}
      </div>
      <div className="containerBackButton">
        <Link to={"/"}>
          <button className="buttonBackButton">Back</button>
        </Link>
      </div>
    </>
  );
};

/* 

<div class="container my-4 w-50">

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <!-- Diapositivas -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card h-100">
                        <img src="https://i.stack.imgur.com/yyE56.png" class="card-img-top w-100 bg-dark" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title 1</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card h-100">
                        <img src="https://i.stack.imgur.com/yyE56.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title 2</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card h-100">
                        <img src="https://i.stack.imgur.com/yyE56.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title 3</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Controles -->
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div> */
