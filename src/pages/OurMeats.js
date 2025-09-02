import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import cowDiagram from "../images/finalcow diagram.svg";
import "../App.css";

export default function OurMeats() {
  const [hovered, setHovered] = useState(null);

  const MAP = {
    name: "cow-map",
    areas: [
      { id: "8",  shape: "rect", coords: [135,110,167,165] },
      { id: "1", shape: "rect", coords: [900, 327, 920, 406] },

      { id: "2",  shape: "poly", coords: [300,167,374,211,356,274,307,266],},
      { id: "3",  shape: "poly", coords: [309,100,355,93,374,131,390,167,376,205,303,160]},
      { id: "4",  shape: "rect", coords: [386,115,443,159] },
      { id: "5",  shape: "rect", coords: [266,108,297,215] },
      { id: "6",  shape: "rect", coords: [220,107,253,213] },
      { id: "7",  shape: "rect", coords: [175,104,213,210] },
      { id: "9",  shape: "rect", coords: [233,217,299,270]},
      { id: "10", shape: "rect", coords: [163,213,226,268] },
      { id: "11", shape: "poly", coords: [111,149,129,153,134,167,159,175,156,239,127,229,107,199]},
      { id: "12", shape: "rect", coords: [66,100,127,144] },
      { id: "13", shape: "rect", coords: [50,138,105,181] },
      { id: "14", shape: "rect", coords: [52,186,101,217] },
      { id: "15", shape: "poly", coords: [105,202,129,236,118,253,93,252] },
      { id: "16", shape: "rect", coords: [56,221,93,248] },
      { id: "17", shape: "poly", coords: [66,252,102,261,92,282,75,300,73,314,55,305] },
    ],
  };

  return (
    <div className="about-page">
      <div className="header-box">
        <h1>Learn About Our Meats</h1>
      </div>

      

        <div className="image-wrap">
          <ImageMapper
            src={cowDiagram}
            name={MAP.name}
            areas={MAP.areas}
            width={600}
            onMouseEnter={(area) => setHovered(area)}
            onMouseLeave={() => setHovered(null)}
            onClick={(area) => setHovered(area)}
          />
        </div>
        <div className="meats-layout">
        <aside className="hover-panel" aria-live="polite">
          <div className="hover-card">
            <div className="hover-title">Section</div>
            <div className="hover-value">
              {hovered ? hovered.id : "— Hover a section —"}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
