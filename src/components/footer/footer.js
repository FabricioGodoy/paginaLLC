import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="containerFooter">
     
      <div className="footerTittleInput">
       
        <div>
          <h3>Order Online or Call</h3>
          <h4> 0151231</h4>
        </div>
       
        <div className="containerLiFooter">
          <ul>
            <li> About us </li>
            <li> Contact us </li>
            <li> Support </li>
            <li> Blog </li>
          </ul>
        </div>

        <div>
          <h5>Follow Us On:</h5>
        </div>
      </div>
{/* 
      <section className="logolinkfooter">
        <a href="/" className="linkFooter">
          <img
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/5324066b3afff9d237c1fdbf39fba21c6d136819/SN-LLC/logoSNFooter.svg"
            className="logoFooter"
          />
          <p>BETTER EXPERIENCE</p>
        </a>
      </section>
      <section className="logoi">
        <a href="https://www.instagram.com/shopnowstore_usa/">
          <img
            src="https://img.icons8.com/ios-filled/100/FFFFFF/instagram-new--v1.png"
            className="logoimg"
          />
        </a>{" "}
        <a href="">
          <img
            src="https://img.icons8.com/material-sharp/96/FFFFFF/send-mass-email.png"
            className="logoimg"
          />
        </a>
      </section>

      <section className="copyright">
        <p className="copyrightFooter">© ShopNow 2020</p>
      </section> */}
    </div>
  );
};
