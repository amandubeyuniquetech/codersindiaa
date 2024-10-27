import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion,useScroll ,useSpring} from "framer-motion";


const LandingPage = () => {
  const navigate = useNavigate();

  const handleMockTests = () => {
    navigate("/mockTests");
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
     <>
    <motion.path
    className="progress-bar" style={{ scaleX }}
    
  />
    <div className="landing-page-wrapper flex justify-center">
      <div className="landing-page inline-flex w-10/12 ">
        <div className="left-column flex flex-col justify-between">
          <div className="text-wrapper">
            <h1 className="text-5xl font-bold">
              Empowering Innovators, <br /> One Line at a <br /> Time{" "}
              <span className="text-blue-800">-"CodersIndia"</span>
            </h1>
          </div>
          <div className="slider  ">
            <img src="images/python.png" alt="...." />
            
          </div>
          {/* <button
            onClick={handleMockTests}
            className="px-6 py-2  w-32 bg-blue-700 hover:bg-[#004AAD] text-white rounded inline-flex ml-3 transition-all duration-300"
          >
            Mock Tests
          </button> */}
        </div>
        <div className="right-column">
          
          <motion.div
    initial={{ opacity: 0, scale: 0.3 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  ><img src="images/first-section-right.png" alt="..." /></motion.div>
        </div>
      </div>
      <div className="second-section">
        <div className="achievements">
          <div className="left-section">
            50+ <br />
            <p>Courses</p>
          </div>
          <div className="border"></div>
          <div className="middle-section">
            10000+ <br />
            <p>Learners</p>
          </div>
          <div className="border"></div>
          <div className="right-section">
            100% <br />
            <p>Happy Learners</p>
          </div>
        </div>
      </div>

      <div className="third-section">
        <div className="text">
          <div className="heading">Our Courses and Classes</div>
          <div className="paragraph">
            Discover IT Courses for comprehensive skill enhancement and career
            enhancement.
          </div>
        </div>
        <div className="sliders">
          <div id="carousel" className=" carousel carousel-end rounded-box">
            <div className="carousel-item">
              {/* <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Drink" /> */}
              <div className="slider-item-heading">
                Master <br /> Python Course
              </div>
              <img src="images/python1.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master
                <br /> HTML Course
              </div>
              <img src="images/html.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> CSS Course
              </div>
              <img src="images/css.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> Javascript Course
              </div>
              <img src="images/js.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> MySQL Course
              </div>
              <img src="images/mysql.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> Nodejs Course
              </div>
              <img src="images/nodejs.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> ReactJS Course
              </div>
              <img src="images/react.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> MongoDB Course
              </div>
              <img src="images/mongodb.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> NextJs Course
              </div>
              <img src="images/next.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
            <div className="carousel-item">
              <div className="slider-item-heading">
                Master <br /> Machine Learning Course
              </div>
              <img src="images/ml.png" alt="..." />
              <button className="explore-btn">Explore Course</button>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-section">
        <div className="heading">
          Our Premier Facilities Await Your Coding Journye!
        </div>
        <div className="facilities">
          <div className="img-col">
            <img src="images/facilities.png" alt="...." />
          </div>
          <div className="text-col">
            <div className="facilitie">
              <div className="facilitie-heading">
                Personal Mentorship at its Best
              </div>
              <div className="facilitie-para">
                "At CodersIndia, personalized mentorship empowers you for coding
                excellence."
              </div>
              
            </div>
            <div className="facilitie">
              <div className="facilitie-heading">
              Trainers from Top Tech Companies
              </div>
              <div className="facilitie-para">
              "Top-tier mentors from tech giants guide your path to mastery."

              </div>
            </div>
            <div className="facilitie">
              <div className="facilitie-heading">
              Unlimited interview practice
              </div>
              <div className="facilitie-para">
              "Master interviews with limitless practice for your coding journey success."

              </div>
            </div>

            <div className="facilitie">
              <div className="facilitie-heading">
              Real Industry Certification with Internship

              </div>
              <div className="facilitie-para">
              "Real industry certifications coupled with valuable internship opportunities."


              </div>

          </div>
        </div>
        
      </div>
      
      
    </div>
    
    </div>
 </>
    
    
  );
};

export default LandingPage;
