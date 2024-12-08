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

          <div className="flex2">
            <img src="../../assets/pencil.png" alt="projectManagement" />
            <span>Project Management</span>
            <div className="text">
              With a strong backgorund in business analysis and project
              management, I excel at bridging the gap between business
              requirements and technical execution. I thrive in leading teams,
              managing workflows, and ensuring project success by aligning
              objectives with outcomes.
            </div>
          </div>

          <div className="flex3">
            <img src="../../assets/ux-design.png" alt="passion" />
            <span>Passion For Development</span>
            <div className="text">
              Beyond my professional role as a Business Analyst, I am passionate
              about React development. Freelancing allows me to explore creative
              projects, constant learning and growing as I bring ideas to life
              through code.
            </div>
          </div>

          <div className="flex4">
            <img src="../../assets/internet.png" alt="freelance" />
            <span>Freelancing</span>
            <div className="text">
              "Turning Ideas into Impactful applications, one project at a
              time."
              <br />
              As a dedicated freelancer, I collaborate with clients and deliver
              tailor-made React applications that meet their unique needs. From
              concept to deployment, I focus on quality, efficiency, and
              exceeding expectatoins with every project.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
