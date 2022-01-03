import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import Img from "react-cool-img";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  const methodDoesNotExist = (aman) => {
    throw new Error("this is a sentry error");
  };

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <Img
              placeholder="/images/skills/lod.jpeg"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQH-lL18D1D4CQ/profile-displayphoto-shrink_800_800/0/1628605824183?e=1645660800&v=beta&t=FXEKL2VySolbFRm0l9BoMnBdUqFm-s02Cq_9YfbU4Yo"
              error="/images/skills/error.png"
              alt="React Cool Img"
              onClick={methodDoesNotExist}
              height="50%"
            />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="details">
                Implementation Engineer at WebEngage Private Limited
                (Formerly Known as Webklipper Technologies Pvt Ltd) . I have
                experience in the frontend development and backend. Interested
                in devising a better problem‑solving method for challenging
                tasks, and learning new technologies and tools if the need
                arises.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a rel="noopener noreferrer" href="https://drive.google.com/file/d/119kMhi_4sp7NC1SvQzOa3U-dGtB_aMuq/view?usp=sharing" target="_blank">
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${
                        tab === "experience"
                          ? "active-tab custom-mr-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Experiences</h5>
                  </Col>
                  <Col
                    className={`
                      ${
                        tab === "education"
                          ? "active-tab custom-ml-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>WebEngage Private Limited</h5>
                      <ul>
                        <li>
                          Working As a Implementation Engineer
                        </li>
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>Masai School</h5>
                        <ul>
                          <li className="text-justify">
                            Graduated From Masai School,Bangalore As Full Stack Developer in 
                            Dec 2020.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
