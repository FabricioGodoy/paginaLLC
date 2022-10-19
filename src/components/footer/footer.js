import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="footerFirstColumn">
        <div className="itemFirstColum">
          <p>Order Online or Call:</p>
          <h4> 0151231</h4>
        </div>
        <div className="itemFirstColum">
          <ul className="listFirstColum">
            <li> About us </li>
            <li> Contact us </li>
            <li> Support </li>
            <li> Blog </li>
          </ul>
        </div>
        <div className="itemFirstColum logosFooter">
          <h5>Follow Us On:</h5>
          <a href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/youtube-play.png" />
          </a>
          <a href="https://twitter.com/SolutionBoxArg">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" />
          </a>
          <a href="https://www.instagram.com/solutionboxarg/">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" />
          </a>
          <a href="https://www.facebook.com/solutionboxarg">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" />
          </a>
        </div>
      </div>

      <div className="footerSecondColumn">
        <div className="itemSecondColumn">
          <h5>CUSTOMER {"&"} TECH SUPPORT</h5>
          <p> (888) 0303-456</p>
          <p> juancitoh@shopnow.com.ar</p>
        </div>
        <hr className="divisorHRfooter" />
        <div className="itemSecondColumn">
          <h5>SALES DEPARTMENT:</h5>
          <p> (0123) 0303-456</p>
          <p> sales@shopnow.com.ar</p>
        </div>
        <hr className="divisorHRfooter" />
        <div className="itemSecondColumn">
          <h5>RMA STATUS:</h5>
          <p> RMA@shopnow.com.ar</p>
        </div>
        <hr className="divisorHRfooter" />
        <div className="itemSecondColumnInput ">
          <input type="email" name="emailUser" placeholder=" NEWSLETTER" />
          <button type="submit" className="buttonNewsLetter">
            Send
          </button>
        </div>
      </div>

      <div className="footerThirdColumn">
        <ul className="listThirdColum">
          <li> Privacy </li>
          <li> Warranty {"&"} Return </li>
          <li> Ecom Warranty </li>
          <li> Refurbished Item Warranty </li>
          <li> Recycling </li>
          <li> Site map </li>
        </ul>
      </div>
    </div>
  );
};
