import "./home.css";
import logoCard from "../../images/confianza_cuotas.svg";
import logoPickup from "../../images/confianza_retiro.svg";
import logoSecure from "../../images/confianza_garantia.svg";
import logoChat from "../../images/chat.svg";

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

      <article className="optionsMenu">
        <section className="cardOptionMenu focus-in-expand-fwd">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/Printers_large.webp"
              className="imgOptionMenu"
            />
          </a>
        </section>
        <section className="cardOptionMenu focus-in-expand-fwd">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/AccessPoints_large.webp"
              className="imgOptionMenu"
            />  
          </a>
        </section>
        <section className="cardOptionMenu focus-in-expand-fwd">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/Switches_large.webp"
              className="imgOptionMenu"
            />
          </a>
        </section>
        <section className="cardOptionMenu focus-in-expand-fwd">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/main/productos/Telephones_large.webp"
              className="imgOptionMenu"
            />
          </a>
        </section>
      </article>
    </div>
  );
};
export default Home;
