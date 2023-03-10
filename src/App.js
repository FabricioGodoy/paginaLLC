import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import { Footer } from "./components/footer/footer";
import { ProductsOfficeView } from "./components/home/productsOffice/productsPCOffice"
import { DetailProduct } from "./components/home/productsOfficeDetail/productDetail"
import { ProductsGamingView } from "./components/home/productsGaming/productsPCGaming" 
import { ProductsGamingDetail } from  "./components/home/productsGamingDetail/productsGamingDetail"
import { Contact } from "./components/contact/contact.js"
import { NotFound } from "./components/notFoundPage/notFound";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      
        <Navbar className=" navbarappindex"/>
        <div className="todo">
          <Routes>
            <Route path="*" element={<Navigate to="/notFound" />} />
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/notFound" exact={true} element={<NotFound />} />
            <Route path="/ProductsOffice" element= { <ProductsOfficeView/> }/>
            <Route path="/detailProductOffice/:catId" element= { <DetailProduct/> }/>
            <Route path="/ProductsGaming" element= { <ProductsGamingView/> }/>
            <Route path="/detailProductGaming/:catId" element= { <ProductsGamingDetail/> }/>
            <Route path="/Contact" element= { <Contact/> }/> 
          </Routes>
        </div>
        <Footer />  
    </Router>
  );
}
export default App;