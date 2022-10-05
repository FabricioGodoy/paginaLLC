import React from "react";
import "./home.css";
import { SliderPrincipal } from "./SliderPrincipal";
import { SliderHomeProductGaming } from "./sliderHomeProductOffice"
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
     
        <div className="containerSliderHome">
          <h1>NSX Gaming recommendation</h1>
          <h3> Gamming PCs that we think could be the best option for you </h3>
        <SliderHomeProductGaming/>
        </div>

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
