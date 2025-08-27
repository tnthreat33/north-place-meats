import '../App.css';
import aboutus from "../images/aboutus.svg";


export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="header-box">
        <h1>Our Farm To Your Table</h1>
      </div>

      <div className="main-content">
        <img src={aboutus} alt="About Us" className="about-image" />
        <p className="about-text">
          Since 1908, Blocher Family Farms has proudly called Northern Indiana home. For over a century, our family has worked the land, raising high-quality cattle with care, integrity, and a deep respect for tradition.

          <br /><br />

          Our beef is born, raised, and finished right here in Indiana—never leaving the state. From pasture to plate, our cows are raised humanely and responsibly, ensuring every cut is rich in flavor and raised the right way.

          <br /><br />

          We partner with North Place Meats to bring our customers locally sourced, premium beef—feeding Indiana families with the same quality we serve our own.
        </p>
      </div>
    </div>
  );
}
