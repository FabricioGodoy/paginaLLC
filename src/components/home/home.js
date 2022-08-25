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
          <a href="/ProductOffice" className="linkCardHomeProduct">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/pcVieja.webp"
              className="imgCardHomeProduct"
            />
            <h1 className='tittleCardHomeProduct'>PC Office</h1>
          </a>
        </section>
        <section className="cardHomeProduct">
          <a href="#" className="linkCardHomeProduct">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_902109-MLA43661191444_102020-O.webp"
              className="imgCardHomeProduct"
            />
            <h1 className='tittleCardHomeProduct'>PC Gaming</h1>
          </a>
        </section>
    </article>
    </div>
    
  );
};
export default Home;
