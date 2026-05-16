import React, { useState } from "react";
import "./Techstack.css";
import { motion, AnimatePresence } from "framer-motion";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  const [selectedSkill, setSelectedSkill] = useState(TechstackList[0]);

  return (
    <>
      <div className="container techstack" id="techstack">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technical Skills
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </motion.div>
        
        <div className="row mt-4">
          {/* Left Column: Skill Buttons List */}
          <div className="col-md-7 col-lg-8">
            <div className="row">
              {TechstackList.map((tech) => (
                <div className="col-md-6 col-lg-4 col-sm-6 mb-3" key={tech._id}>
                  <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div 
                      className={`card tech-card ${selectedSkill._id === tech._id ? "active-skill" : ""}`} 
                      onClick={() => setSelectedSkill(tech)}
                    >
                      <div className="card-content">
                        <div className="card-body p-3">
                          <div className="media d-flex justify-content-center align-items-center">
                            <div className="alig-self-center mr-2">
                              <tech.icon className="tech-icon small-icon" />
                            </div>
                            <div className="media-body text-center">
                              <h6 className="m-0 font-weight-bold">{tech.name}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Dynamic Content Box */}
          <div className="col-md-5 col-lg-4 mt-3 mt-md-0">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedSkill._id} 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="skill-detail-box card shadow"
              >
                <div className="card-body p-4 text-center">
                  <div className="skill-logo mb-3">
                    <selectedSkill.icon size={80} className="detail-icon" />
                  </div>
                  <h3 className="font-weight-bold mb-3">{selectedSkill.name}</h3>
                  <p className="skill-description text-muted" style={{ textAlign: "justify" }}>
                    {selectedSkill.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;