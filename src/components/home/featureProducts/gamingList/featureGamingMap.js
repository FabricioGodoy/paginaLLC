import React from "react";
import { Link } from "react-router-dom";
import { SliderHomeProductGaming } from "./sliderHomeProductGaming";
import Slider from "react-slick";
import "./featureGaming.css";

export const FeatureGaming = ({ product }) => {
  var settings = {
    dots: true
  };
  return (
    <div>
      <h1 className="titleProductFeature"> FEATURE GAMING </h1>
      <Slider {...settings} style={{ width: "95%", margin: "auto" }}>
        <div className=" containerFeature">
          {product.map((article) => (
            <article key={article.id} className="productContainerFeature">
              <Link
                to={`/detailProductGaming/${article.id}`}
                className="linkProduct"
              >
                {/*   <SliderHomeProductGaming/> */}

                <img src={article.img} className="imgProductGamingFeature" />
                <section className="descriptionContainerFeature">
                  <h3> {article.name}</h3>
                  <div className="buttonContainer">
                    <Link to={`/detailProductGaming/${article.id}`}>
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
      </Slider>
    </div>
  );
};
