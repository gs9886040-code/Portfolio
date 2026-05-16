import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Gopiportfolioresume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
            <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>Hi 👋 I'm a</h2>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="home-buttons d-flex justify-content-center">
                <a
                  className="btn btn-hire"
                  href="https://api.whatsapp.com/send?phone=6383531197"
                  rel="noreferrer"
                  target="_blank"
                >
                  Work with me!
                </a>
                <a
                  className="btn btn-cv"
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;