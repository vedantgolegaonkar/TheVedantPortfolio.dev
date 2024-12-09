import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="development">
            <div className="text1">Skills</div>
            <div className="orange-line"></div>
            <img src="../../assets/settings.png" alt="development" /><span>Development</span>

            <div className="left-circle">
                <div className="left-one">React</div>
                <div className="left-two">HTML</div>
                <div className="left-three">Postgre SQL</div>
            </div>

            <div className="right-circle">
                <div className="right-one">JavaScript</div>
                <div className="right-two">CSS</div>
                <div className="right-three">Node.js</div>
            </div>
        </div>


        <div className="ba">
            <div className="up">
            <img src="../../assets/BA.png" alt="development" /><span>Business Analysis</span>
            </div>
            <div className="down">
            <div className="tools"></div>
            <div className="knowledge"></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Skills
