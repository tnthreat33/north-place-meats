import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import cowDiagram from "../images/finalcow diagram.svg";
import "../App.css";

export default function OurMeats() {
  const [hovered, setHovered] = useState(null);

  const MAP = {
    name: "cow-map",
    areas: [
      { id: "8",  shape: "rect", coords: [135,110,167,165], preFillColor: "rgba(255,0,0,0.25)" },
      { id: "1",  shape: "rect", coords: [302,277,327,356], preFillColor: "rgba(0,255,0,0.25)" },
      { id: "2",  shape: "poly", coords: [300,167,374,211,356,274,307,266], preFillColor: "rgba(0,0,255,0.25)" },
      { id: "3",  shape: "poly", coords: [309,100,355,93,374,131,390,167,376,205,303,160], preFillColor: "rgba(255,255,0,0.25)" },
      { id: "4",  shape: "rect", coords: [386,115,443,159], preFillColor: "rgba(255,0,255,0.25)" },
      { id: "5",  shape: "rect", coords: [266,108,297,215], preFillColor: "rgba(0,255,255,0.25)" },
      { id: "6",  shape: "rect", coords: [220,107,253,213], preFillColor: "rgba(128,0,128,0.25)" },
      { id: "7",  shape: "rect", coords: [175,104,213,210], preFillColor: "rgba(128,128,0,0.25)" },
      { id: "9",  shape: "rect", coords: [233,217,299,270], preFillColor: "rgba(255,128,0,0.25)" },
      { id: "10", shape: "rect", coords: [163,213,226,268], preFillColor: "rgba(0,128,255,0.25)" },
      { id: "11", shape: "poly", coords: [111,149,129,153,134,167,159,175,156,239,127,229,107,199], preFillColor: "rgba(128,255,0,0.25)" },
      { id: "12", shape: "rect", coords: [66,100,127,144], preFillColor: "rgba(255,0,128,0.25)" },
      { id: "13", shape: "rect", coords: [50,138,105,181], preFillColor: "rgba(0,255,128,0.25)" },
      { id: "14", shape: "rect", coords: [52,186,101,217], preFillColor: "rgba(128,128,255,0.25)" },
      { id: "15", shape: "poly", coords: [105,202,129,236,118,253,93,252], preFillColor: "rgba(255,128,128,0.25)" },
      { id: "16", shape: "rect", coords: [56,221,93,248], preFillColor: "rgba(128,255,255,0.25)" },
      { id: "17", shape: "poly", coords: [66,252,102,261,92,282,75,300,73,314,55,305], preFillColor: "rgba(200,200,200,0.25)" },
    ],
  };

  return (
    <div className="about-page">
      <div className="header-box">
        <h1>Learn About Our Meats</h1>
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

        <div className="image-wrap">
          <ImageMapper
            src={cowDiagram}
            map={MAP}
            width={600}               // adjust to your SVG's intended display width
            onMouseEnter={(area) => setHovered(area)}
            onMouseLeave={() => setHovered(null)}
            onClick={(area) => setHovered(area)} // keeps selection on tap for mobile
          />
        </div>
      </div>
    </div>
  );
}
