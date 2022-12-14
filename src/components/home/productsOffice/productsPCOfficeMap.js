import React from "react";
import { Link } from "react-router-dom";
import "./productsPCOffice.css";
import SlickPCOffice from "./sliderProductsPCOffice";

export const ProductMap = ({ stock }) => {
  return (
    <>
    <h1 className=" titleProductFeature tittleContainer "> PC's Office</h1>
    <div className=" containerProduct">
      {stock.map((article) => (
        <article key={article.id} className="productContainerGammig">
          <Link
            to={`/detailProductOffice/${article.id}`}
            className="linkProduct"
          >
            {/*  { article.gabinete === 100 ? <SlickPCGamingGabinete100 /> : <SlickPCGamingGabinete111 /> } */}
            <img src={article.img} className="imgProductGaming" />
            <section className="descriptionContainer">
            {/*   <p> {article.category}</p> */}
              <h3> {article.name}</h3>
              <div className="buttonContainer">
                <Link to={`/detailProductOffice/${article.id}`}>
                  <button className="buttonProductContainer">
                    More Info
                  </button>
                </Link>
                <Link to={`#`}>
                  <button className="buttonProductContainer">
                    Buy it Now
                  </button>
                </Link>
              </div>
            </section>
          </Link>
        </article>
      ))}
    </div>
    <div className="containerBackButton">
      <Link to={"/"} className="linkBackButton">
        <button className="buttonBackButton">
          <div className="iconBack">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/circled-left.png" />
          </div>{" "}
          <span className="buttonDetailProductBack">Back</span>
        </button>
      </Link>
    </div>
  </>
  );
};
