import React from "react";
import { ProductsView } from "./productsOffice/productsPCOffice";
import "./home.css";
import logoCard from "../../images/logos/confianza_cuotas.svg";
import logoPickup from "../../images/logos/confianza_retiro.svg";
import logoSecure from "../../images/logos/confianza_garantia.svg";
import logoChat from "../../images/logos/chat.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="banner" />

      <div className="quickAccess">
        <section className="cardQuickAccess">
          <a href="#">
            <img src={logoCard} className="iconsQuickAccess" />
            <p>FREE 2-DAY SHIPPING on Selected Orders</p>
          </a>
        </section>
        <section className="cardQuickAccess">
          <a href="#">
            <img src={logoPickup} className="iconsQuickAccess" />
            <p>PICKUP Where are we?</p>
          </a>
        </section>
        <section className="cardQuickAccess">
          <a href="#">
            <img src={logoSecure} className="iconsQuickAccess" />
            <p>100% SECURE PURCHASE Official guarantee</p>
          </a>
        </section>
        <section className="cardQuickAccess">
          <a href="#">
            <img src={logoChat} className="iconsQuickAccess" />
            <p>CHAT WITH US Se habla español</p>
          </a>
        </section>
      </div>

      <article className="sliderHomeProducts">
        <section className="cardSliderHomeProducts">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/Printers_large.webp"
              className="imgSliderHomeProducts"
            />
          </a>
        </section>
        <section className="cardSliderHomeProducts">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/AccessPoints_large.webp"
              className="imgSliderHomeProducts"
            />
          </a>
        </section>
        <section className="cardSliderHomeProducts">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/Switches_large.webp"
              className="imgSliderHomeProducts"
            />
          </a>
        </section>
        <section className="cardSliderHomeProducts">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/Telephones_large.webp"
              className="imgSliderHomeProducts"
            />
          </a>
        </section>
      </article>

      <article className="containerCardHomeProduct">
        <section className="cardHomeProduct">
          <a href="/ProductsOffice" className="linkCardHomeProduct">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/pcVieja.webp"
              className="imgCardHomeProduct"
            />
            <h1 className="tittleCardHomeProduct">Office</h1>
          </a>
        </section>

        <section className="cardHomeProduct">
          <a href="/ProductsGaming" className="linkCardHomeProduct">
            <img
              src="https://github.com/FabricioGodoy/imagenes/blob/main/SN-LLC/pcGaming/case_111r_lateral.png?raw=true"
              className="imgCardHomeProduct"
            />
            <h1 className="tittleCardHomeProduct">Gaming</h1>
          </a>
        </section>
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
<hr/>
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
