import "./home.css";
import logoCard from "../../images/logos/confianza_cuotas.svg";
import logoPickup from "../../images/logos/confianza_retiro.svg";
import logoSecure from "../../images/logos/confianza_garantia.svg";
import logoChat from "../../images/logos/chat.svg";
import pcVieja from "../../images/products/pcVieja.jpg";
import logoCartAdd from "../../images/logos/logoCartAdd.png";

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

      <section className="productsContainer">
        <article className="products">
          <img src={pcVieja} width="100%" />
          <section className="info-produc">
            <img src={logoCartAdd} className="logoCartAdd" />
            <section className="info-price">
              <p className="price">$6.a770</p>
              <p className="discount">40% OFF</p>
            </section>

            <h4 className="descripcion">Cafetera Moulinex</h4>
          </section>
        </article>

        <article className="products">
          <img src={pcVieja} width="100%" />
          <section className="info-produc">
            <img src={logoCartAdd} className="logoCartAdd" />
            <section className="info-price">
              <p className="price">$6.770</p>
              <p className="discount">40% OFF</p>
            </section>

            <h4 className="descripcion">Cafetera Moulinex</h4>
          </section>
        </article>

        <article className="products">
          <img src={pcVieja} width="100%" />
          <section className="info-produc">
            <img src={logoCartAdd} className="logoCartAdd" />
            <section className="info-price">
              <p className="price">$6.770</p>
              <p className="discount">40% OFF</p>
            </section>

            <h4 className="descripcion">Cafetera Moulinex</h4>
          </section>
        </article>

        <article className="products">
          <img src={pcVieja} width="100%" />
          <section className="info-produc">
            <img src={logoCartAdd} className="logoCartAdd" />
            <section className="info-price">
              <p className="price">$6.770</p>
              <p className="discount">40% OFF</p>
            </section>

            <h4 className="descripcion">Cafetera Moulinex</h4>
          </section>
        </article>
      </section>
    </div>
  );
};
export default Home;
