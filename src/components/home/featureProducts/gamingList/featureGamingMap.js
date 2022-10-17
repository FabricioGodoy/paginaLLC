import React from "react";
import { Link } from "react-router-dom";
import "./featureGaming.css";

export const FeatureGaming = ({ product }) => {

  return (
      <div className=" containerFeature">
        
        <div className="containerTitle">
          
          <h1 className="titleProductFeature">NSX GAMING recommendation</h1>
          <h4 className="titleProductFeature2">
            {" "}
            Gamming PCs that we think could be the best option for you{" "}
          </h4>
          
          <Link to={`/ProductsGaming`}  className=" iconCardHomeProductLink ">
            <p className=" iconCardText ">See All </p>
          </Link>
       
        </div>

        {product.map((article) => (
          <article key={article.id} className="productContainerFeature">
            <Link
              to={`/detailProductGaming/${article.id}`}
              className="linkProductFeature"
            >

              <div className="containerDescriptionFeature">
                <img src={article.img} className="imgProductGamingFeature" />
                <section className="descriptionContainerFeature">
                  <h3> {article.name}</h3>
                  <div className="buttonContainerFeature">
                    <Link to={`/detailProductGaming/${article.id}`}>
                      <button className="buttonProductContainerFeature">
                        More Info
                      </button>
                    </Link>
                    <Link to={`#`}>
                      <button className="buttonProductContainerFeature">
                        Buy it Now
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
            </Link>
          </article>
        ))}
      </div>
  );
};
