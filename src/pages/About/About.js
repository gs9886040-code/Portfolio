import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import profilePic from "../../assets/images/gopinathresumeimage.png";
const About = () => {
  return (
    <>
      <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={profilePic}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a Computer Science and Engineering student passionate about full-stack web development and software engineering. I enjoy building real-world applications using modern technologies and continuously improving my problem-solving skills through development and programming.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;