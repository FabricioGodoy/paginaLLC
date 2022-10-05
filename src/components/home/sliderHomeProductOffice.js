import React from "react";
import Slider from "react-slick";

export const SliderHomeProductGaming = ({stockGaming}) => {
  var settings = {
    dots: true
  };
  return (
    <Slider
      {...settings}
      style={{   width: "95%" , margin: "auto" }}
    >
     
        <div>
        <a href="/" className="linkCardHomeProduct">
     {/*    <div className="containerSliderHome">
          <h1>NSX Gaming recommendation</h1>
          <h3> Gamming PCs that we think could be the best option for you </h3>
        </div> */}
            <article className="containerSliderProductsGamingHome">
              
              <section className=" ProductsGamingHome ">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/flyer_gamer.png?raw=true"
                  className="imgCardHomeProduct"
                />
              </section>

              <section className=" ProductsGamingHome ">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/flyer_gamer.png?raw=true"
                  className="imgCardHomeProduct"
                />
              </section>

              <section className=" ProductsGamingHome ">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/flyer_gamer.png?raw=true"
                  className="imgCardHomeProduct"
                />
              </section>

            </article>
          </a>
        </div>
      
        <div>
          <a href="">

          <article className="containerSliderProductsGamingHome">
              
              <section className=" ProductsGamingHome ">
            
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/flyer_gamer.png?raw=true"
                  className="imgCardHomeProduct"
                />
              </section>

              <section className=" ProductsGamingHome ">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/flyer_gamer.png?raw=true"
                  className="imgCardHomeProduct"
                />
              </section>

              <section className=" iconCardHomeProduct ">
             <a href="/ProductsGaming">
                
                <img src="https://img.icons8.com/carbon-copy/100/000000/more-than.png" className="iconImgCardHomeProduct" />
              </a>
              </section>

            </article>

          </a>
        </div>
      
      
      
      
      
      
      
      {/*   <div>
            <img className='' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_frente.png?raw=true" />
          </div>
          <div>
            <img className='' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_detras.png?raw=true" />
          </div>
          <div>
            <img className='' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_arriba.png?raw=true" />
          </div> */}
    </Slider>
  );
};

