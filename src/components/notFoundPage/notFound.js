import React from "react";
import "./notFound.css"


export const NotFound = () => {
  return (
    <div className="containerNotFound">
      <img src="https://img.icons8.com/cotton/64/000000/page-not-found.png" className="imgNotFound"/>

      <div className="containerListNotFound">
          <h1>Not Found</h1>
          <ul className="listNotFound">
            <li>Check the spelling of the word.</li>
            <li>Use more generic words or fewer words.</li>
            <li>Try browsing our category menu.</li>
            <li>Return to the <a href="/">main page</a> to continue searching.</li>
          </ul>
      </div>
   
    </div>
  );
};
