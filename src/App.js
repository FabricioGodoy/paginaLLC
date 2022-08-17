import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/navbar/Navbar";
import Home from "./components/home/home";
import { ProductsView } from "./components/home/products/products"
import { DetailProduct } from "./components/home/productDetail/productDetail"


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/detailProduct/:catId" element= { <DetailProduct/> }/>
          </Routes>
        </div>
            
      </div>
    </Router>
  );
}
export default App;
