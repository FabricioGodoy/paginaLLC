import React from "react";
import Slider from "react-slick";

export const SlickPCGamingDetailGabinete100= () => {
    var settings = {
      dots: true
    }
    return (
    
        <Slider {...settings}  style={{ width: "25rem",margin: "0rem 2rem 0rem 0rem" }}>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_perfil2.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_perfil.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_lateral.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_frente.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_detras.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_arriba.png?raw=true" />
          </div>
        </Slider>
    );
  }


export default SlickPCGamingDetailGabinete100