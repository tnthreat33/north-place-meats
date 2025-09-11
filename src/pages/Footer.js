import "../App.css";
import logo from "../images/3.svg";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <div className="logo-mark">
            <img src={logo} alt="Northplace Meats logo" />
          </div>
          <div className="logo-text">
            <span className="brand">NORTHPLACE MEATS</span>
            <span className="est">EST • 2018</span>
          </div>
        </div>

        <div className="footer-block">
          <h4>Office</h4>
          <address>
            123 Anywhere St. Any City ST 12345<br />
            Tel: <a href="tel:+1234567890">+1 234-567-890</a><br />
            <a href="mailto:hello@reallygreatsite.com">hello@northplacemeats.com</a>
          </address>
        </div>

        <div className="footer-block">
          <h4>Business hours</h4>
          <p>Monday - Friday: 9am – 6pm<br />Saturday: 9am – 12pm</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span className="social-label">Get social</span>
        <nav className="social-icons" aria-label="Social links">
          <a href="#" aria-label="Facebook" className="icon-link">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram" className="icon-link">
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.2V12h2.2V9.8c0-2.17 1.29-3.37 3.27-3.37.95 0 1.94.17 1.94.17v2.13h-1.09c-1.07 0-1.41.66-1.41 1.34V12h2.4l-.38 2.88h-2.02v7A10 10 0 0 0 22 12z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.51 5.51 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM17.8 6.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z"/>
    </svg>
  );
}
