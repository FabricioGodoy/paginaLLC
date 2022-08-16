import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/navbar/Navbar";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
