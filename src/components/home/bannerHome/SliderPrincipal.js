import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const SliderPrincipal = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/banners1.jpeg?raw=true"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/Banner2.jpeg?raw=true"
              }
              alt="Segunda imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/Banner3.jpeg?raw=true"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/banner4.webp"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/banner5.jpeg?raw=true"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/banner6.jpeg?raw=true"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/banner7.jpeg?raw=true"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/banner8.webp"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/banner9.webp"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            <img
              className="d-block w-100"
              src={
                "https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/banner10.webp"
              }
              alt="Primer imagen slider"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
