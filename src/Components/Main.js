import React, { useState } from "react";
import "../Css/main.css";

export const Main = () => {
  const [colorValue,setColorValue]=useState("")
  return (
    <div className="Main-container">
      <section className="main-box" style={{ backgroundColor: colorValue }}>
        <p>{colorValue ? colorValue : "no color"}</p>
      </section>
      <div className="main-input">
        <input
          type="text"
          placeholder="enter your color name "
          required
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </div>
    </div>
  );
};

