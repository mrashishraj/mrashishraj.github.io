// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "/images/Projects/DrorApp.png",
    title: "COVID-Emp-Tracker",
    description:"Covid employee tracker web-app made for keep a track of company staff and some features like admin login, change the status as Covid+ve or Quarantine etc.",
    source: "https://github.com/mrashishraj/DrorApp.git",
    demoLink: "https://emp-covid-tracker.web.app/",
    badge: "MERN",
  },
  {
    image: "/images/Projects/Linkedin-Project-1.png",
    title: "Linkedin Clone",
    description:"Some feature link login with different account, comment and link of linkedin with pixel perfect UI",
    source: "https://github.com/mrashishraj/router-project-ashish-raj/tree/main/linkedin-page",
    demoLink: "https://linkedin-clone-a9e9f.web.app/",
    badge: "ReactJS",
  }
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={4} className="mb-5" key={index + 1}>
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  <div className="project-card">
                    <div className="img-section width-100p height-200px cor-bg-style" loop autoplay style={{backgroundImage:`url(${project.image})`}}>
                     
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info1">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a rel="noopener noreferrer"
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
