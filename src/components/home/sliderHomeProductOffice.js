import React from "react";
import Slider from "react-slick";

export const SliderHomeProductOffice = () => {
  var settings = {
    dots: true
  };
  return (
    <Slider
      {...settings}
      style={{ width: "25rem", margin: "0rem 2rem 3rem 0rem" }}
    >
      <div>
        <h1>NSX Gaming recommendation</h1>
        <h3> Gamming PCs that we think could be the best option for you </h3>
      </div>
      <div>
        <img
          className=""
          src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_perfil.png?raw=true"
        />
      </div>
      <div>
        <img
          className=""
          src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_m100a_lateral.png?raw=true"
        />
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

export default SliderHomeProductOffice;
