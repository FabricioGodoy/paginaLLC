import React from "react";
import Slider from "react-slick";

export const SlickPCGamingDetailGabinete111 = () => {
    var settings = {
      dots: true
    }
    return (
    
        <Slider {...settings} style={{ width: "25rem",margin: "0rem 2rem 3rem 0rem" }}>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case111/case_111r_frente-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case111/case_111r_lateral-removebg-preview.png?raw=true"/>
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case111/case_111r_perfil-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case111/case_111r_atras-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case111/case_111r_arriba-removebg-preview.png?raw=true" />
          </div>
        </Slider>
    );
  }