import React from "react";
import Slider from "react-slick";

export const SliderHomeProductGaming = ({ stockGaming }) => {
  var settings = {
    dots: true
  };
  return (
    <Slider {...settings} style={{ width: "95%", margin: "auto" }}>
      <div>
          <article className="containerSliderProductsGamingHome">
            <section className=" ProductsGamingHome ">
              <a href="/detailProductGaming/1">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGI5VNS4W-01.jpg?raw=true"
                  className="imgCardHomeProduct"
                />
              </a>
            </section>

            <section className=" ProductsGamingHome ">
              <a href="/detailProductGaming/8">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGR7VNS4W-02.jpg?raw=true"
                  className="imgCardHomeProduct"
                />
              </a>
            </section>

            <section className=" ProductsGamingHome ">
            <a href="/detailProductGaming/3">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGR7VNS4W-01.jpg?raw=true"
                  className="imgCardHomeProduct"
                />
              </a>
            </section>
          </article>
      </div>

      <div>
          <article className="containerSliderProductsGamingHome">
            <section className=" ProductsGamingHome ">
            <a href="/detailProductGaming/5">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGI5VNS4W-05.jpg?raw=true"
                  className="imgCardHomeProduct"
                />
              </a>
            </section>

            <section className=" ProductsGamingHome ">
            <a href="/detailProductGaming/9">
                <img
                  src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGR7VNS4W-03.jpg?raw=true"
                  className="imgCardHomeProduct"
                />
              </a>
            </section>

        
          </article>
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
