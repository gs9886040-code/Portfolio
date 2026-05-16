import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are some of my recent projects focusing on healthcare and inventory management systems, showcasing my skills in web development and Salesforce applications.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <motion.div className="row w-100" initial={{ rotate: 90, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            
            <div className="col-md-6 mb-4">
              <div className="card rounded h-100">
                <div className="card-image">
                  <span className="card-notify-badge">Web App</span>
                  <img
                    src="https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148531011.jpg"
                    alt="Mental Health Care Web Application"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 d-flex flex-wrap justify-content-center gap-2">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">MySQL</span>
                </div>
                <div className="card-body text-center d-flex flex-column">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase fw-bold">
                      Mental Health Care Web Application
                    </h5>
                  </div>
                  <p className="mt-3 text-start" style={{fontSize: "0.95rem"}}>
                    Developed a healthcare web application focused on mental health assessment and user support. Implemented personalized recommendations for users and doctors based on assessment results. Designed responsive user interfaces and improved accessibility for Tamil and English language users.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card rounded h-100">
                <div className="card-image">
                  <span className="card-notify-badge">Salesforce App</span>
                  <img
                    src="https://img.freepik.com/free-vector/inventory-management-concept-illustration_114360-8431.jpg"
                    alt="Medical Inventory Management"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3 d-flex flex-wrap justify-content-center gap-2">
                  <span className="card-detail-badge">Salesforce Lightning</span>
                  <span className="card-detail-badge">Apex</span>
                  <span className="card-detail-badge">SOQL</span>
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                </div>
                <div className="card-body text-center d-flex flex-column">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase fw-bold">
                      Medical Inventory Management
                    </h5>
                  </div>
                  <p className="mt-3 text-start" style={{fontSize: "0.95rem"}}>
                    Built a Salesforce Lightning application for managing medical inventory and purchase transactions. Created custom objects to track product details, stock availability, and transaction history. Developed reports and dashboards for monitoring inventory status and improving medical product management efficiency.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;