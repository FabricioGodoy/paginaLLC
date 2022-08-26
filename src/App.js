import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/navbar/Navbar";
import Home from "./components/home/home";
import { Footer } from "./components/footer/footer";
import { ProductsOfficeView } from "./components/home/productsOffice/productsPCOffice"
import { DetailProduct } from "./components/home/productsOfficeDetail/productDetail"
import { ProductsGamingView } from "./components/home/productsGaming/productsPCGaming" 
import { ProductsGamingDetail } from  "./components/home/productsGamingDetail/productsGamingDetail"


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/ProductsOffice" element= { <ProductsOfficeView/> }/>
            <Route path="/ProductsOffice/:catId" element= { <ProductsOfficeView/> }/>
            <Route path="/detailProductOffice/:catId" element= { <DetailProduct/> }/>
            <Route path="/ProductsGaming" element= { <ProductsGamingView/> }/>
            <Route path="/ProductsGaming/:catId" element= { <ProductsGamingView/> }/>
            <Route path="/detailProductGaming/:catId" element= { <ProductsGamingDetail/> }/>
          </Routes>
        </div>
        <Footer />  
      </div>
    </Router>
  );
}
export default App;
