import '../App.css';
import cowDiagram from "../images/finalcow diagram.svg";

export default function OurMeats() {
  return (
    <div>
      <div className="about-page">
        <div className="header-box">
          <h1>Learn About Our Meats</h1>
        </div>
        <img src={cowDiagram} alt="cow"/>
      </div>
    </div>
  );
}
