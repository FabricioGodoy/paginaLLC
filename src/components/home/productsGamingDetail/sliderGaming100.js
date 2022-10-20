import React from "react";
import Slider from "react-slick";



export const SlickPCGamingDetailGabinete100= () => {
    var settings = {
      dots: true
    }
    return (
    
        <Slider {...settings}  style={{ width: "25rem",margin: "0rem 2rem 3rem 0rem" }}>
          
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case100/case_m100a_frente-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case100/case_m100a_lateral-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case100/case_m100a_detras-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case100/case_m100a_perfil-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case100/case_m100a_perfil2-removebg-preview.png?raw=true" />
          </div>
          <div>
            <img className='imgProductGamingDetail' src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case100/case_m100a_arriba-removebg-preview.png?raw=true" />
          </div>
        </Slider>
    );
  }


export default SlickPCGamingDetailGabinete100