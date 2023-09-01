import React, { useState } from "react";
import "./BtnColor.css";
const App = () => {
  const [background, setBackground] = useState("");
  let bg = () => {
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const handle = () => {
    const newcolor = bg();
    setBackground(newcolor);
  };
  return (
    <div style={{ background, minHeight: "100vh" }}>
    
        <div className="btn">
          <button className="button" onClick={handle}>Click</button>
        </div>
      
    </div>
  );
};

export default App;
