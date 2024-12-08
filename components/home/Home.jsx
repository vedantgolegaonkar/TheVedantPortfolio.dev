// Import All the Libraries
import React from "react";
import "./Home.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


// Register GSAP
gsap.registerPlugin(useGSAP);

const Home = () => {

  // Use GSAP
  useGSAP(() => {

    // Use Timeline for the Animation
    const timeline = gsap.timeline()


    // Line Animation
    timeline.fromTo(
      ".line",
      { width: 0 }, 
      {
        width: "22%", 
        duration: 1.5, 
        ease: "power2.out", 
      }
    ).to(".line", {
      width: 0,
      duration: 1.5,
      ease:"power2.in",
    })


    // Name Animation
    timeline.to(".name",{
      y: -25,
      delay: -1.6,
      opacity: 1,
      duration: 1,
      ease: "linear"
    })


    // Role Animation
    timeline.to(".role", {
      y: 25,
      delay: -1.6,
      opacity: 1,
      duration: 1,
      ease: "linear "
    })
  });

  

  return (
    <>
    <div className="background">
      <div className="line"></div>
      <div className="name">Vedant Girish Golegaonkar</div>
      <div className="role">Frontend Developer</div>
    </div>
    </>
  );
};

export default Home;
