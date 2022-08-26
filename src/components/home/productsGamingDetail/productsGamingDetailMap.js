import React from "react";
import  { Link } from "react-router-dom";
import "./productsGamingDetail.css";
import { SlickPCGamingDetailGabinete100 } from "./sliderGaming100";
import { SlickPCGamingDetailGabinete111 } from "./sliderGaming111";

export const ProductsGamingDetailMap = ( {producto} ) =>{
    return (
        <div>
            { " " }
            <h2 className="titleDetailProductGaming"> Product Detail </h2>
            <hr/>
            <div className="containerProductDetailGaming">
                {producto.map( (article) =>(
                 <section key={article.id}>
                    <article className="containerListDetailGaming">
                    { article.gabinete === 100 ? <SlickPCGamingDetailGabinete100 /> : <SlickPCGamingDetailGabinete111 /> }
                    <div className="containerListGaming">
                       {article.caracteristicas.map((data) =>(
                        <li className="listDetailGaming">{data}</li>
                       ))} 
                    </div>
                    </article>
                    <hr/>
                    <div className="containerButtonDetailProductGaming">
                        <Link to={'/ProductsGaming'}>
                          <button className="buttonDetailProductGaming">Back</button>
                        </Link>
                        <Link to={`#`}>
                          <button className="buttonDetailProductGaming">Buy it Now</button>
                        </Link>
                    </div>
                 </section>   
                ))}
            </div>
        </div>
    )
}