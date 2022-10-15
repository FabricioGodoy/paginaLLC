import React from "react";
import { Link } from "react-router-dom";

export const FeatureOfficeMobile = ({ officeMobile }) => {

  return (
      <div className=" containerFeature containerFeatureMobileOn ">
        
<div className="containerTitle">
          
          <h1 className="titleProductFeature">NSX OFFICE recommendation</h1>
          <h4 className="titleProductFeature2">
            {" "}
            Office PCs that we think could be the best option for you{" "}
          </h4>
          
          <Link to={`/ProductsOffice`}  className=" iconCardHomeProductLink ">
            <p className=" iconCardText ">See All </p>
          </Link>
       
        </div>
      

        {officeMobile.map((article) => (
          <article key={article.id} className="productContainerFeature">
            <Link
              to={`/detailProductOffice/${article.id}`}
              className="linkProductFeature"
            >

              <div className="containerDescriptionFeature">
                <img src={article.img} className="imgProductGamingFeature" />
                <section className="descriptionContainerFeature">
                  <h3> {article.name}</h3>
                  <div className="buttonContainerFeature">
                    <Link to={`/detailProductOffice/${article.id}`}>
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
