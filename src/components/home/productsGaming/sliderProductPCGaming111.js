import React from "react";
import Slider from "react-slick";

export const SlickPCGamingGabinete111 = () => {
    var settings = {
      dots: true
    }
    return (
    
        <Slider {...settings}  style={{ width: "25vw"}}>
          <div>
            <img className='imgProductGaming' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_perfil.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGaming' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_lateral.png?raw=true"/>
          </div>
          <div>
            <img className='imgProductGaming' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_frente.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGaming' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_atras.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGaming' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_arriba.png?raw=true" />
          </div>
        </Slider>
    );
  }