import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="containerContact">
      <div className="containerTittleContact">
        <h1>Contact</h1>
        <h3>How can we Help you?</h3>
      </div>
      <div className="formContactContainer">
        <form action="/" method="post">
          <div className="formContact">
            <label>Name:</label>
            <input
              type="text"
              name="nombreDeUsuario"
              className="formContactName"
              required
            />
          </div>
          <div className="formContact">
            <label>Email:</label>
            <input
              type="email"
              name="nombreDeUsuario"
              className="formContactEmail"
              required
            />
          </div>
          <div className="formContact">
            <label>Phone number:</label>
            <input
              type="tel"
              name="nombreDeUsuario"
              className="formContactPhone"
              required
            />
          </div>
          <div className="formContact">
            <label className="formContactLabel">How do you prefer that we contact you?</label>
            <select className="formContactPrefer" name="preferContact">
              <option  className="formContactPreferOption" value="email">Email</option>
              <option  className="formContactPreferOption" value="phone">Phone</option>
            </select>
          </div>
          <div className="formContact">
            <label>Message:</label>
            <textarea
              type="text"
              name="nombreDeUsuario"
              className="formContactMessage"
              required
            />
          </div>
          <button type="submit" className="buttonFormContact">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
