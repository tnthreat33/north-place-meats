import React, { useState } from "react"; 
import cowDiagram from "../images/finalcow diagram.svg";
import "../App.css";

export default function OurMeats() {
  const [selectedSection, setSelectedSection] = useState(null);

  const sectionInfo = {
  1: { name: "Shin", description: "Tough, lean cut best for slow cooking into stews and soups." },
  2: { name: "Clod", description: "Lean shoulder muscle, great for ground beef or braising." },
  3: { name: "Neck", description: "Flavorful but fatty, often used for minced meat and stocks." },
  4: { name: "Cheek", description: "Tender when slow-cooked, prized for rich braised dishes." },
  5: { name: "Chuck Rib", description: "Marbled and flavorful, ideal for roasts or stews." },
  6: { name: "Middle Rib", description: "Tender rib section, great for grilling or roasting." },
  7: { name: "Fore Rib", description: "Rich and marbled, often cut into ribeye steaks." },
  8: { name: "Sirloin", description: "Lean yet tender, excellent for steaks and roasts." },
  9: { name: "Shoulder", description: "Versatile cut, good for braising, roasting, or ground beef." },
  10: { name: "Brisket", description: "Tough, fatty cut perfect for smoking or slow braising." },
  11: { name: "Thin Flank", description: "Lean with coarse grain, best for stir-fries or ground beef." },
  12: { name: "Rump", description: "Firm but flavorful, often used for steaks or roasting." },
  13: { name: "Edge Bone", description: "Tough section, typically used for boiling beef or stews." },
  14: { name: "Round", description: "Lean and moderately tough, great for roasting or deli meat." },
  15: { name: "Velny Piece", description: "A lean, lesser-known cut used in stews or minced meat." },
  16: { name: "Buttock", description: "Lean, dense cut suitable for slow roasting or braising." },
  17: { name: "Leg", description: "Very lean and sinewy, best for ground meat or long cooking." },
};


  const handleClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <div className="about-page">
      <div className="header-box">
        <h1>Learn About Our Meats</h1>
      </div>
      <div className="section-header">
      <h3>Click Section to Learn more.</h3>
      </div>

      <div className="meats-layout">
        <div className="image-wrap">
          <img
            src={cowDiagram}
            useMap="#cow-map"
            alt="Cow Diagram"
            width="500"
            height="500"
          />

          <map name="cow-map">
            <area shape="poly" coords="295,270,323,273,321,319,321,343,329,360,316,356,305,324" alt="1" onClick={() => handleClick(1)} />
            <area shape="poly" coords="303,165,370,209,367,245,350,272,307,264" alt="2" onClick={() => handleClick(2)} />
            <area shape="poly" coords="313,101,357,97,375,138,377,179,380,202,361,200,305,161" alt="3" onClick={() => handleClick(3)} />
            <area shape="poly" coords="385,109,408,123,440,143,430,157,399,158,383,139" alt="4" onClick={() => handleClick(4)} />
            <area shape="rect" coords="266,113,296,215" alt="5" onClick={() => handleClick(5)} />
            <area shape="rect" coords="256,210,222,107" alt="6" onClick={() => handleClick(6)} />
            <area shape="rect" coords="175,105,215,211" alt="7" onClick={() => handleClick(7)} />
            <area shape="poly" coords="139,108,172,105,163,172,133,159" alt="8" onClick={() => handleClick(8)} />
            <area shape="poly" coords="220,213,295,215,303,264,269,273,238,268" alt="9" onClick={() => handleClick(9)} />
            <area shape="poly" coords="163,213,215,213,241,271,201,274,173,263,159,246" alt="10" onClick={() => handleClick(10)} />
            <area shape="poly" coords="113,149,133,151,137,165,165,175,157,239,129,232,112,209,103,197" alt="11" onClick={() => handleClick(11)} />
            <area shape="poly" coords="67,99,135,105,131,145,49,137" alt="12" onClick={() => handleClick(12)} />
            <area shape="rect" coords="54,140,104,183" alt="13" onClick={() => handleClick(13)} />
            <area shape="rect" coords="52,183,101,216" alt="14" onClick={() => handleClick(14)} />
            <area shape="poly" coords="106,204,131,236,117,255,93,253" alt="15" onClick={() => handleClick(15)} />
            <area shape="rect" coords="55,217,96,253" alt="16" onClick={() => handleClick(16)} />
            <area shape="poly" coords="67,251,113,260,86,291,75,317,60,314,54,304" alt="17" onClick={() => handleClick(17)} />
          </map>
        </div>

        <aside
          className="hover-panel"
          aria-live="polite"
          style={{
            minWidth: "250px",
            padding: "30px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            height: "fit-content",
            position: "sticky",
            top: "20px",
            backgroundColor: "#ebeddf",
          }}
        >
          {selectedSection ? (
            <>
               <h3>{sectionInfo[selectedSection].name}</h3>
               <p>{sectionInfo[selectedSection].description}</p>
               <button
                  onClick={() => (window.location.href = "/order")}
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    backgroundColor: "#155a3b",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Buy Now
                </button>
            </>
          ) : (
            <>
              <h3>Section Info</h3>
              <p>Click a section</p>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
