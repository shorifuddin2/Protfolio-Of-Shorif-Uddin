import React from "react";
import "./AboutMe.css";
import profilePic from "../../Images/shorif.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  slideInRight,
  bounceIn,
  slideInLeft,
  slideInUp,
  slideInDown,
} from "react-animations";
import Radium, { StyleRoot } from "radium";

const AboutMe = () => {
  const styles = {
    slideInLeft: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInLeft, "bounce"),
    },
    slideInUp: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInUp, "bounce"),
    },
    slideInRight: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInRight, "bounce"),
    },
    bounceIn: {
      animation: "x 3s",
      animationName: Radium.keyframes(bounceIn, "bounce"),
    },
    slideInDown: {
      animation: "x 3s",
      animationName: Radium.keyframes(slideInDown, "bounce"),
    },
  };
  return (
    <StyleRoot>
      <div className="first-section ">
        <div className="about-me text-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8 col-lg-6 col-sm-12">
              <h1 className="about-title font" style={styles.slideInDown}>
                HI !, I'M SHORIF UDDIN
              </h1>
              <div className="about ">
                <div className="autoType title-sm" style={styles.bounceIn}>
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "React Developer",
                        "JavaScript Developer",
                      ],

                      autoStart: true,
                      loop: true,
                      delay: 100,
                    }}
                  />
                </div>
                <p className="mt-2" style={styles.slideInRight}>
                  I am an enthusiastic JavaScript developer with knowing some
                  framework for the frontend and the backend. I know Basic React-Native
                  and MySQL but basically a MERN developer.
                </p>
              </div>
              <div style={styles.bounceIn}>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://www.linkedin.com/in/shorif-uddin-58b01a203/">

                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </button>
                <button className="icon-button">
                  <a className="icon-button" target="_blank" href="https://github.com/shorifuddin2">
                    {" "}
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </button>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://mail.google.com/mail/u/2/#inbox"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </button>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://www.instagram.com/sheikh_milon1/"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </button>
                <button className="icon-button">
                  <a
                    className="icon-button"
                    target="_blank"
                    href="https://www.facebook.com/shorif.uddin.milon2"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </button>
              </div>
              
                <div className="col-md-6 col-sm-12 mx-auto">
                  <button className="btn btn-info resume-download">
                    <a className=""
                      href="https://drive.google.com/file/d/1GFk4b6Wd716SuHSCefK30jNFl1x8dmfZ/view?usp&export=download"
                      download
                    >
                      Download Resume
                    </a>
                  </button>
                </div>
              
            </div>
            <div
              className="col-md-6 col-sm-12 rounded col-lg-6 col-sm-12 profile-pic w-100 mx-auto mt-2"
              style={styles.slideInLeft}
            >
              <img id="image" src={profilePic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

export default AboutMe;
