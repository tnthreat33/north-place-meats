import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import OurMeats from "./Pages/OurMeats";
import Order from "./Pages/Order";
import Faqs from "./Pages/Faqs";
import AboutUs from "./Pages/AboutUs";


function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/ourmeats" style={{ margin: "10px" }}>Our Meats</Link>
          <Link to="/order" style={{ margin: "10px" }}>Order</Link>
          <Link to="/faqs" style={{ margin: "10px" }}>FAQs</Link>
          <Link to="/aboutus" style={{ margin: "10px" }}>About Us</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourmeats" element={<OurMeats />} />
          <Route path="/order" element={<Order />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
