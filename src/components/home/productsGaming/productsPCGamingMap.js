import React from "react";
import { Link } from "react-router-dom";
import "./productsPCGaming.css";
import {SlickPCGamingGabinete100} from "./sliderProductsPCGaming100";
import { SlickPCGamingGabinete111 } from "./sliderProductPCGaming111";

export const ProductsPCGamingMap = ({ stockGaming }) => {
   
  return (
    <>
      <h1 className="titleProduct"> PC's Gaming</h1>
      <div className=" containerProduct">
        {stockGaming.map((article) => (
          <article key={article.id} className="productContainerGammig">
          <Link to={`/detailProductGaming/${article.id}`} className="linkProduct">
           { article.gabinete === 100 ? <SlickPCGamingGabinete100 /> : <SlickPCGamingGabinete111 /> }
            <section className="descriptionContainer">
              <p> {article.category}</p>
              <h3> {article.name}</h3>
              <div className="buttonContainer">
                <Link to={`/detailProductGaming/${article.id}`}>
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
      <div className="containerBackButton">
        <Link to={"/"}>
          <button className="buttonBackButton">Back</button>
        </Link>
      </div>
    </>
  );
};
