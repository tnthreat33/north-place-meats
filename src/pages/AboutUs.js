import '../App.css';
import aboutus from "../images/aboutus.jpg";
import aboutus2 from "../images/aboutus2.jpg";
import aboutus3 from "../images/aboutus3.jpg";


export default function AboutUs() {
  return (
    <div className="about-page">
      <div className="header-box">
        <h1>Our Farm To Your Table</h1>
      </div>

      <div className="main-content">
        <div className="section-one">
                  <img src={aboutus} alt="About Us" className="about-image" />
        <p className="about-text">
          Since 1850, Blocher Family Farms has proudly called Northern Indiana home. For over a century, our family has worked the land, raising high-quality cattle with care, integrity, and a deep respect for tradition.
        </p>
        </div>
        <div className="section-two">
                  <img src={aboutus2} alt="About Us" className="about-image" />

        <p className="about-text">
          Our beef is born, raised, and finished right here in Indiana—never leaving the state. From pasture to plate, our cows are raised humanely and responsibly, ensuring every cut is rich in flavor and raised the right way.
        </p>
        </div>
        <div className="section-three">
                  <img src={aboutus3} alt="About Us" className="about-image" />
        <p className="about-text">
          We partner with North Place Meats to bring our customers locally sourced, premium beef—feeding Indiana families with the same quality we serve our own.
        </p>
        </div>
      </div>
    </div>
  );
}
