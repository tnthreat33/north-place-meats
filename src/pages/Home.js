// src/pages/Home.js
import "../App.css";
import whiteLogo from "../images/white-logo.svg";

export default function Home() {
  return (
    <div className="homepage">
      {/* Left nav box */}
      <div className="nav-box">
        <nav className="homepage-nav">
          <a href="/">Home</a>
          <a href="/ourmeats">Our Meats</a>
          <a href="/order">Order</a>
          <a href="/faqs">FAQs</a>
          <a href="/aboutus">About Us</a>
        </nav>
      </div>

      {/* Right logo */}
      <img src={whiteLogo} alt="White Logo" className="homepage-logo" />
    </div>
  );
}
