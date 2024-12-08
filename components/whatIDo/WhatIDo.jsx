import React from "react";
import "./WhatIDo.css";

const WhatIDo = () => {
  return (
    <>
      <div className="heading">
        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>
        <div className="what">What I Do</div>
        <div className="orange-line"></div>
        <div className="web-dev">

          <div className="flex1">
            <img src="../../assets/html.png" alt="HTML" />
            <span>Web Development</span>
            <div className="text">
              Using React, HTML, CSS, and JavaScript, I specialize in building
              dynamic, responsive, and user-friendly web applications. My focus
              is on writing clean, modular, and maintainable code while
              delivering visually engaging interfaces.
            </div>
          </div>

          <div className="flex1">
            <img src="../../assets/html.png" alt="HTML" />
            <span>Web Development</span>
            <div className="text">
              Using React, HTML, CSS, and JavaScript, I specialize in building
              dynamic, responsive, and user-friendly web applications. My focus
              is on writing clean, modular, and maintainable code while
              delivering visually engaging interfaces.
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
