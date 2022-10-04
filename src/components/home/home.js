import React from "react";
import "./home.css";
import logoCard from "../../images/logos/confianza_cuotas.svg";
import logoPickup from "../../images/logos/confianza_retiro.svg";
import logoSecure from "../../images/logos/confianza_garantia.svg";
import logoChat from "../../images/logos/chat.svg";
import { SliderPrincipal } from "./SliderPrincipal";

import logo from "../../images/logos/logo-sn.png";
const Home = () => {
  return (
    <div className="home">
      <SliderPrincipal />
      <section className="bannerBottomBanner">
        {/* <img src={logo}/> */}
          <a href="#"className="bottomBannerItem">
            <img
              className="imgBannerBottomBanner"
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-cpu-cyber-security-kiranshastry-solid-kiranshastry-5.png"
            />
            <p>High quiality components</p>
          </a>
        <a href="#"className="bottomBannerItem">
            <img
              className="imgBannerBottomBanner"
              src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/gears.png"
            />
            <p>Customizable and pre-biult option</p>
          </a>
        <a href="#"className="bottomBannerItem">
            <img
              className="imgBannerBottomBanner"
              src="https://img.icons8.com/ios/50/FFFFFF/discount--v1.png"
            />
            <p>The best prices on the market</p>
        </a>
        <a href="#"className="bottomBannerItem">
            <img
              className="imgBannerBottomBanner"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/puzzle.png"
            />
            <p>Curated and assembled by pros</p>
        </a>
      </section>

      <article className="containerCardHomeProduct">

        <a href="/ProductsOffice" className="linkCardHomeProduct">
          <section className="cardHomeProduct ">
            <h1 className="tittleCardHomeProduct">
              <img
                src="https://img.icons8.com/external-basicons-solid-edtgraphics/100/1A1A1A/external-PC-computers-and-accessories-basicons-solid-edtgraphics.png"
                className="iconCardHome"
              />
              Office
              <img
                src="https://img.icons8.com/external-basicons-solid-edtgraphics/100/1A1A1A/external-PC-computers-and-accessories-basicons-solid-edtgraphics.png"
                className="iconCardHome"
              />
            </h1>
            <img
              src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/flyer_office.png?raw=true"
              className="imgCardHomeProduct"
            />
          </section>
        </a>


        <a href="/ProductsGaming" className="linkCardHomeProduct">
          <section className="cardHomeProduct ">
            <h1 className="tittleCardHomeProduct">
              <img
                src="https://img.icons8.com/glyph-neue/64/1A1A1A/ps-controller.png"
                className="iconCardHome"
              />
              Gaming
              <img
                src="https://img.icons8.com/glyph-neue/64/1A1A1A/ps-controller.png"
                className="iconCardHome"
              />
            </h1>
            <img
              src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/flyer_gamer.png?raw=true"
              className="imgCardHomeProduct"
            />
          </section>
        </a>

      </article>

      <div className="containerLogoRedirect">
        <a href="#">
          <img
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/amazon_logo_carousel.webp"
            className="logoRedirect"
          />
        </a>
        <a href="#">
          <img
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/ebay_logo_carousel.webp"
            className="logoRedirect"
          />
        </a>
        <a href="#">
          <img
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/newegg_logo_carousel.webp"
            className="logoRedirect"
          />
        </a>
      </div>

      <a href="#">
        <img
          src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/SN-LLC/banner%20amazon.webp"
          alt="banner footer amazon"
          className="imgBanerFooter"
        />
      </a>
    </div>
  );
};
export default Home;
