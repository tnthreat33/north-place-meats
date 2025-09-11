import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import OurMeats from "./pages/OurMeats";
import Order from "./pages/Order";
import Faqs from "./pages/Faqs";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer"

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div>
      {!isHomePage && (
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/ourmeats">Our Meats</Link>
          <Link to="/order">Order</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/aboutus">About Us</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourmeats" element={<OurMeats />} />
        <Route path="/order" element={<Order />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
