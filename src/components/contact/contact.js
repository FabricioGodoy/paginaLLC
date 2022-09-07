import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="containerContact">
      <div className="containerTittleContact">
        <h1>Contact</h1>
        <h3>How can we Help you?</h3>
      </div>
      <form action="/" method="post" className="formContactContainer">
        <div className="FormContact">
          <label>Name:</label>
          <input  type="text" name="nombreDeUsuario" className="formContactName" placeholder="Name" required />
        </div>
        <div className="FormContact">
          <label>Email:</label>
          <input  type="email" name="nombreDeUsuario" className="formContactEmail" placeholder="Email" required />
        </div>
        <div className="FormContact">
          <label>Phone number:</label>
          <input  type="tel" name="nombreDeUsuario" className="formContactPhone" placeholder="Name" required />
        </div>
        <div className="FormContact">
          <label>How do you prefer that we contact you?</label>
          <input  type="email" name="email" className="formContactEmailPrefer" placeholder="Email" required />
        </div>
        <div className="FormContact">
          <label>Message:</label>
          <input  type="text" name="nombreDeUsuario" className="formContactMessage" placeholder="Name" required />
        </div>
        <button type="submit" className="buttonFormContact">Send</button>
      </form>
    </div>
  );
};
