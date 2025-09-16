import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import OurMeats from "./pages/OurMeats";
import Order from "./pages/Order";
import Faqs from "./pages/Faqs";
import AboutUs from "./pages/AboutUs";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <div>
      {!isHomePage && (
        <header className="site-header">
          <Link className="brand" to="/">Home</Link>

          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(v => !v)}
          >
            ☰
          </button>

          <nav id="main-menu" className={`main-nav ${menuOpen ? "open" : ""}`}>
            <Link to="/ourmeats">Our Meats</Link>
            <Link to="/order">Order</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/aboutus">About Us</Link>
          </nav>
        </header>
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
