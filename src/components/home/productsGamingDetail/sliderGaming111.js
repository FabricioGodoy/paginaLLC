import React from "react";
import Slider from "react-slick";

export const SlickPCGamingDetailGabinete111 = () => {
    var settings = {
      dots: true
    }
    return (
    
        <Slider {...settings}  style={{ width: "30vw"}}>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_perfil.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_lateral.png?raw=true"/>
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_frente.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_atras.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_arriba.png?raw=true" />
          </div>
        </Slider>
    );
  }