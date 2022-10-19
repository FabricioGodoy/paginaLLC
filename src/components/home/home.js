import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { SliderPrincipal } from "./bannerHome/SliderPrincipal";
import { ProductsDestacados } from "./featureProducts/gamingList/listGamingFeatures";
import { ProductsDestacadosOffice } from "./featureProducts/officeList/listOfficeFeature";
import { BannerBuyOnAmazon } from "../../images/banner/bannerBuyOnAmazon";
import { LogosRedirect } from "./logosRedirect";
import { ProductsDestacadosOfficeMobile } from "./featureProducts/officeList/mobile/listOfficeMobile";

const Home = () => {
  return (
    <div className="home">
      <SliderPrincipal />
      {/* ----------- Option botton banner ----------- */}
      <section className="bannerBottomBanner">
          <span className="bottomBannerItem">
            <img
              className="imgBannerBottomBanner "
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-cpu-cyber-security-kiranshastry-solid-kiranshastry-5.png"
            />
            <p>High quiality components</p>
          </span>
          <span className="bottomBannerItem">
          <img
            className="imgBannerBottomBanner"
            src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/gears.png"
          />
          <p>Customizable and pre-biult option</p>
          </span>
          <span className="bottomBannerItem">
          <img
            className="imgBannerBottomBanner"
            src="https://img.icons8.com/ios/50/FFFFFF/discount--v1.png"
          />
          <p>The best prices on the market</p>
          </span>
  
          <span className="bottomBannerItem">
          <img
            className="imgBannerBottomBanner"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/puzzle.png"
          />
          <p>Curated and assembled by pros</p>
          </span>
      </section>
      {/* ----------- FIN Option botton banner ----------- */}
     
      {/* ---------- Gaming Feature ----------- */}
      {<ProductsDestacados />}
      {/* ---------- FIN Gaming Feature ----------- */}
        <hr className="hr" />
      {/*----------- Office Feature ------------ */}
      {<ProductsDestacadosOffice />}
      {/*----------- FIN Office Feature ------------ */}
     
      {/*----------- Office Feature MOBILE------------ */}
      {<ProductsDestacadosOfficeMobile />}
      {/*----------- FIN Office Feature MOBILE------------ */}

      {<BannerBuyOnAmazon />}

{/* ---------------contact us --------------------- */}
      <div className="containerContactHome">
        <h1 className="titleContactHome"> Contact Us </h1>
        <h3 className="titleContactHome2"> We are here to help you.</h3>
        <div className="containerButtonContactHome">
        <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-help-100-most-used-icons-flaticons-flat-flat-icons-2.png" className="imgContactHome"/>
          <h5 className="titleContactHome3">Ask Away</h5>
          <Link to={`/Contact`}> <button className="buttonContactHome"> Help</button></Link>
        </div>
      </div>
{/* --------------- FIN contact us --------------------- */}


{/* ----------HELPERS-------------- */}
      <div className="containerHelpers">
        <div className="helpers">
          <img className="logosInfoHelper" src= "https://raw.githubusercontent.com/FabricioGodoy/imagenes/c462c07dd67472ecd07774148ae5c4c2d93e1afa/SN-LLC/icon_fast_ship.svg"/>
          <h2 > Fast & Free Shipping</h2>
          <p> Our gaming PCs will be shipped the same da with free two-day shipping (excluding custom gaming PCs and laptops)</p>
        </div>
        <div className="helpers" >
          <img className="logosInfoHelper" src= "https://raw.githubusercontent.com/FabricioGodoy/imagenes/c462c07dd67472ecd07774148ae5c4c2d93e1afa/SN-LLC/icon_assembled.svg"/>
          <h2> Assembled in the USA</h2>
          <p> Every gaming pc and laptop that goes through SHOPNOW’s assembly line is carefully hand assembled in the USA.</p>
        </div>
        <div className="helpers"  >
          <img className="logosInfoHelper" src= "https://raw.githubusercontent.com/FabricioGodoy/imagenes/c462c07dd67472ecd07774148ae5c4c2d93e1afa/SN-LLC/icon_lifttime%20support.svg"/>
          <h2> Standard -- -- Year Warranty</h2>
          <p> Every purchase from SHOPNOW comes with a standard 3-year warranty supported by our in-house technicians.</p>
        </div>
      </div>
{/* ----------FIN HELPERS-------------- */}


      {<LogosRedirect />}
    </div>
  );
};
export default Home;
