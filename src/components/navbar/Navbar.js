import './navbar.css';
import logo from "../../images/logo-sn.png" ;
import banderaArg from "../../images/banderaArg.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header =()=>{
  return(
    <header className="navbar">
      <div>
        <div className='containerNavbar'>
          <a href="/"><img src={logo} alt="logo navbar" className='logoNavbar'/></a>
              <div className='list'>
                <ul className="left-nav-bar">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">BRANDS</a></li>
                    <li><a href="#">SALE PRODUCTS</a></li>
                    <li><a href="#">MESSAGE</a></li>
                </ul>
              </div>
                  <br/>
              <div className='list'>
                <section className="nav-bar-busqueda">
                    <input type="search" placeholder="   Search products, brands and more.."/>
                </section>
              </div>
                  <br/>
              <div className='list'>
                 <ul className="rigth-nav-bar">
                     <li><a href="http://www.shopnow.com.ar" className='tittleSNArg'>
                     <img src={banderaArg} alt="logo navbar" className='iconFlagArg'/>
                     SHOPNOW ARGENTINA</a></li>
                 </ul>
                 <section>
                     <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart.png" className='cart'/>
                 </section>
              </div>
        </div>
         <br/>
        <div className='bottomNavbar'>
            <ul className="bottomListNavbar">
               <li><a href="#">Router</a></li>
               <li><a href="#">Switches</a></li>
               <li><a href="#">Telephone</a></li>
               <li><a href="#">Gateway</a></li>
               <li><a href="#">Antennas</a></li>
               <li><a href="#">Access point</a></li>
            </ul>
        </div>
      </div>
    </header>
  )
}

export default  Header