import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

export const ReactSlickDemo= () => {
  
    var settings = {
      dots: true
    }
    return (
      <div>
        <Slider {...settings}  style={{ width: "20vw"}}>
          <div>
            <img className="imgProduct" src="https://github.com/FabricioGodoy/imagenes/blob/main/productos/pcOfficeBack.jpeg?raw=true" />
          </div>
          <div>
            <img className="imgProduct" src="https://github.com/FabricioGodoy/imagenes/blob/main/productos/pcOffice.jpeg?raw=true" />
          </div>
          <div>
            <img className="imgProduct" src="https://github.com/FabricioGodoy/imagenes/blob/main/productos/pcOfficeFront.jpeg?raw=true" />
          </div>
        </Slider>
      </div>
    );
  }


export default ReactSlickDemo