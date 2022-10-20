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
            <img className='imgProductDetailSlick' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOfficeFront-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductDetailSlick' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOffice-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductDetailSlick' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOfficeBack-removebg-preview.png?raw=true" />
          </div>
        </Slider>
      </div>
    );
  }


export default SlickPCOfficeDetails