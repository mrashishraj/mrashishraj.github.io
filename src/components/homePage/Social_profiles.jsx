// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from 'react-bootstrap/Badge'
import Img from 'react-cool-img';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const myProjects = [
  {
    image: "/images/social_tags/Aswin_post.png",
  },
  {
    image: "/images/social_tags/Ashish_LI_Post.png",
  },
  {
    image: "/images/social_tags/Engager_post.png",
  },
  {
    image: "/images/social_tags/Masai_medium_artical.png",
  },
  {
    image: "/images/social_tags/Mili_LI_post.png",
  },
  {
    image: "/images/social_tags/My_LI_Post.png",
  },
  {
    image: "/images/social_tags/Prateek_post2.png",
  },
  {
    image: "/images/social_tags/Pratik_post.png",
  },
  {
    image: "/images/social_tags/Varun_post.png",
  },
  {
    image: "/images/social_tags/WeTheYoung_interview.png",
  },
  {
    image: "/images/social_tags/IndianExpress.png",
  }
  
];

const SocialProfiles = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects1" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Achieve</span>ment
          </h1>
        </div>
        <OwlCarousel className='owl-theme' loop margin={10} nav={true} dots={true} autoplay>
        {myProjects.map((item,index)=>{
          return(
        <div class='item'>
                    <Img
                      placeholder={item.image}
                      src={item.image}
                       error="/images/download.png"
                       alt="React Cool Img"
                      className="width-100p"/>
        </div>
        )})}
        </OwlCarousel>


        {/* <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project,index) => {
              return (
                <Col md={4} className="mb-5" key={index+1}>
                  <div className="project-card1">
                    <div className="img-section">
                    <Img
                      placeholder="/images/Loading.mp4"
                      src={project.image}
                       error="/images/download.png"
                       alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>

                    <div className="project-info1">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.dLink}</p>
                     {project.demoLink && <div className="d-flex justify-content-between mr-4">
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Read ...
                        </a>
                      </div>}
                    </div>

                  </div>
                </Col>
              );
            })}
          </Row>
        </div> */}
      </motion.div>
    </div>
  );
};

export default SocialProfiles;
