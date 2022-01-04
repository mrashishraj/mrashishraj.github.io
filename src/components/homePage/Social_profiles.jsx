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
    title:"Aswin (Director,MEA at WebEngage)",
    link:"https://www.linkedin.com/posts/aswin-ravi_diversity-is-critical-for-any-organisation-activity-6766399466862968832-8YQf/",
    discription:"There have been many hires in WebEngage recently but this one is special- Ashish Raj , welcome to the team !"
  },
  {
    image: "/images/social_tags/WeTheYoung_interview.png",
    title:"Interview of WETheYoung Instagram Channel",
    link:"https://www.instagram.com/tv/CNsHPQ6HFTO/",
    discription:"Hear what was it like to drive around at night while attending college during the day and from there, joining a startup as engineer."
  },
  {
    image: "/images/social_tags/Engager_post.png",
    title:"By WebEngage Page on LinkedIn",
    link:"https://www.linkedin.com/posts/webengage_lifeofanengager-activity-6778663515906461696-a_Yt/",
    discription:"Ashish has fought tooth and nail to build a life in the City of Dreams. His story of passion and grit is a huge inspiration for all of us 💪🏽"
  },
  {
    image: "/images/social_tags/Indian-express.png",
    title:"IndianExpress Artical",
    link:"https://www.edexlive.com/beinspired/2021/may/05/this-24-year-old-who-worked-as-an-uber-driver-to-pay-for-his-education-is-now-an-engineer-heres-his-20357.html",
    discription:"This 24-year-old who worked as an Uber driver to pay for his education is now an engineer."
  },
  {
    image: "/images/social_tags/Documentary-youtube.png",
    title:"My Documentary Video On Youtube",
    link:"https://www.youtube.com/watch?v=0867JeIfyLY",
    discription:"In 7 months, Ashish turned his life upside down and went on from driving cabs to skilling himself and working as a Software Engineer."
  },
  {
    image: "/images/social_tags/Varun_post.png",
    title:"Varun (Creative Content Producer of Masai School)",
    link:"https://www.linkedin.com/posts/sharmavarun0109_masai-masaischool-codingisforeveryone-activity-6879300394166620160-3-M_/",
    discription:"Big Thanks to Ashish Raj for sharing his story with us to inspire many with a Never-Give-Up attitude :)"
  },
  {
    image: "/images/social_tags/Masai-Medium.png",
    title:"Artical on Masai School Medium Page",
    link:"https://masaischool.medium.com/having-to-drive-an-ola-cab-to-make-ends-meet-ashish-raj-now-works-as-an-engineer-abda0d04953b",
    discription:"Having to drive an Uber cab to make ends meet, Ashish Raj now works as an Engineer"
  },
    {
      image: "/images/social_tags/Prateek_post2.png",
      title:"Prateek (CEO and Founder of Masai School)",
      link:"https://www.linkedin.com/posts/prateek-shukla-4a747931_having-to-drive-an-ola-cab-to-make-ends-meet-activity-6765562933406789632-4C93/",
      discription:"One of the most #inspiringstory from Masai School to date! ❤️"
    },
    {
      image: "/images/social_tags/Mili_LI_post.png",
      title:"Mili (AVP, HR at Webengage)",
      link:"https://www.linkedin.com/posts/mili-panicker-0b8215b_having-to-drive-an-ola-cab-to-make-ends-meet-activity-6766004848275058688-0DFX/",
      discription:"One such recent hires have overcome such challenges through discipline and his passion for programming."
    },
    {
      image: "/images/social_tags/Ashish_LI_Post.png",
      title:"Ashish (VCM at FableStreet)",
      link:"https://www.linkedin.com/posts/ashish-dobhal-b8171b53_masai-masaischool-codingisforeveryone-activity-6879320185350692864-7dY3/",
      discription:"A truly inspirational story that let's you dive into so many emotions of a 'normal guy'"
    },
  
  
];

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dots: true,
  loop:true,
  stagePadding:50,
  autoplay: true,
  navText: ["Prev", "Next"],
  autoplayTimeout:4000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 3,

      }
  },
};

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
        <OwlCarousel className='owl-theme' {...options} >
        {myProjects.map((item,index)=>{
          return(
        <div class='item'>
          <div className="project-card1">
            <div className="width-100p height-250px cor-bg-style" loop autoplay style={{backgroundImage:`url(${item.image})`}}>
            </div>
            <div className="project-info1">
              <h5 className="color-white font-weight-bold">
                {item.title}
                  </h5>
                <p className="color-white">{item.discription}</p>
                <div className="d-flex justify-content-between mr-4">
                    <a rel="noopener noreferrer"
                      href={item.link}
                      className="project-card-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                    Read Full
                  </a>
                </div>
            </div>
          </div>
          <div>

          </div>
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
