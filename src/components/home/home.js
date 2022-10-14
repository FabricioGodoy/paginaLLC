import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { SliderPrincipal } from "./bannerHome/SliderPrincipal";
import { ProductsDestacados } from "./featureProducts/gamingList/listGamingFeatures";
import { ProductsDestacadosOffice } from "./featureProducts/officeList/listOfficeFeature";
import { BannerBuyOnAmazon } from "../../images/banner/bannerBuyOnAmazon";
import { LogosRedirect } from "./logosRedirect";

const Home = () => {
  return (
    <div className="home">
      <SliderPrincipal />
      <section className="bannerBottomBanner">
        {/* <img src={logo}/> */}
        <a href="#" className="bottomBannerItem">
          <img
            className="imgBannerBottomBanner"
            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-cpu-cyber-security-kiranshastry-solid-kiranshastry-5.png"
          />
          <p>High quiality components</p>
        </a>
        <a href="#" className="bottomBannerItem">
          <img
            className="imgBannerBottomBanner"
            src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/gears.png"
          />
          <p>Customizable and pre-biult option</p>
        </a>
        <a href="#" className="bottomBannerItem">
          <img
            className="imgBannerBottomBanner"
            src="https://img.icons8.com/ios/50/FFFFFF/discount--v1.png"
          />
          <p>The best prices on the market</p>
        </a>
        <a href="#" className="bottomBannerItem">
          <img
            className="imgBannerBottomBanner"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/puzzle.png"
          />
          <p>Curated and assembled by pros</p>
        </a>
      </section>
      {/* ---------- Gaming Feature ----------- */}
      {<ProductsDestacados />}
      {/* ---------- FIN Gaming Feature ----------- */}
      <hr className="hr" />

      {/*----------- Office Feature ------------ */}
      {<ProductsDestacadosOffice />}
      {/*----------- FIN Office Feature ------------ */}

      {/*----------- MOBILE --------display none en home css------ */}
      <div className="containerProductsMobile">
        <article className="containerSliderProductsGamingHomeMobile">
          <section className=" ProductsGamingHomeMobile ">
            <a href="/detailProductGaming/1">
              <img
                src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGI5VNS4W-01.jpg?raw=true"
                className="imgCardHomeProductMobile"
              />
            </a>
          </section>

          <section className=" ProductsGamingHomeMobile ">
            <a href="/detailProductGaming/8">
              <img
                src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGR7VNS4W-02.jpg?raw=true"
                className="imgCardHomeProductMobile"
              />
            </a>
          </section>

          <section className=" ProductsGamingHomeMobile ">
            <a href="/detailProductGaming/3">
              <img
                src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/nsx_PGR7VNS4W-01.jpg?raw=true"
                className="imgCardHomeProductMobile"
              />
            </a>
          </section>
        </article>
      </div>
      {/*----------- FIN MOBILE -------------- */}

      {<BannerBuyOnAmazon />}

      <div className="containerContactHome">
        <h1 className="titleContactHome"> Contact Us </h1>
        <h3 className="titleContactHome2"> We are here to help you.</h3>
        <div className="containerButtonContactHome">
        <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-help-100-most-used-icons-flaticons-flat-flat-icons-2.png" className="imgContactHome"/>
          <h5 className="titleContactHome3">Ask Away</h5>
          <Link to={`/Contact`}> <button className="buttonContactHome"> Help</button></Link>
        </div>
      </div>

      {<LogosRedirect />}
    </div>
  );
};
export default Home;
