import React from "react";
import { Link } from "react-router-dom";
import "./productsPCGaming.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import  { useState} from "react";


export const ProductsPCGamingMap = ({ stockGaming }) => {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <>
      <h1 className=" titleProductFeature tittleContainer"> PC's Gaming</h1>
      <div className=" containerProduct">
        {/* {stockGaming.map((article) => (
          <article key={article.id} className="productContainerGammig">
            <Link
              to={`/detailProductGaming/${article.id}`}
              className="linkProduct"
            >
              <img src={article.img} className="imgProductGaming" />
              <section className="descriptionContainer">
                <h3> {article.name}</h3>
                <div className="buttonContainer">
                  <Link to={`/detailProductGaming/${article.id}`}>
                    <button className="buttonProductContainer">
                      More Info
                    </button>
                  </Link>
                  <Link to={`#`}>
                    <button className="buttonProductContainer">
                      Buy it Now
                    </button>
                  </Link>
                </div>
              </section>
            </Link>
          </article>
        ))} */}

 
 {stockGaming.map((item) => (
   <motion.div layoutId={item.id} className="productContainerGammig" key={item.id} onClick={() => setSelectedId(item.id)}>
     <motion.img src={item.img} className="imgProductGaming" />
     <motion.h5 className="descriptionContainer buttonProductContainer">{item.name}</motion.h5>
     <motion.div className="descriptionContainer buttonProductContainer">{item.category}</motion.div>
   </motion.div>
 ))}
 
  <AnimatePresence>
   {selectedId && (
     <motion.div layoutId={selectedId}>
    {/*    <motion.h5>{item.name}</motion.h5>
       <motion.h2>{item.sku}</motion.h2> */}
       <motion.button onClick={() => setSelectedId(null)} />
     </motion.div>
   )}
 </AnimatePresence>



      </div>
      <div className="containerBackButton">
        <Link to={"/"} className="linkBackButton">
          <button className="buttonBackButton">
            <div className="iconBack">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/circled-left.png" />
            </div>{" "}
            <span className="buttonDetailProductBack">Back</span>
          </button>
        </Link>
      </div>
    </>
  );
};
