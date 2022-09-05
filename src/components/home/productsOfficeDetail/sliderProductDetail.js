import React from "react";
import Slider from "react-slick";

export const SlickPCOfficeDetails= () => {
  
    var settings = {
      dots: true
    }
    return (
      <div>
        <Slider {...settings}  style={{ width: "25rem",margin: "auto 0 3rem", padding:"2rem" }}>
            <div>
            <img className='imgProductDetailSlick' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOffice.jpeg?raw=true" />
          </div>
          <div>
            <img className='imgProductDetailSlick' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOfficeFront.jpeg?raw=true" />
          </div>
          <div>
            <img className='imgProductDetailSlick' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOfficeBack.jpeg?raw=true" />
          </div>
        </Slider>
      </div>
    );
  }


export default SlickPCOfficeDetails