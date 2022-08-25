import React from "react";
import Slider from "react-slick";

export const SlickPCOffice= () => {
  
    var settings = {
      dots: true
    }
    return (
     
        <Slider {...settings}  style={{ width: "20vw"}}>
          <div>
            <img className='imgProduct' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOffice.jpeg?raw=true" />
          </div>
          <div>
            <img className='imgProduct' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOfficeFront.jpeg?raw=true" />
          </div>
          <div>
            <img className='imgProduct' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcOffice/pcOfficeBack.jpeg?raw=true" />
          </div>
        </Slider>
    );
  }


export default SlickPCOffice