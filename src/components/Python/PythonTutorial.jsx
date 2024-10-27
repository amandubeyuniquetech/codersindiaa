import React from 'react';
import htmlTutorial from "../htmlTutorial.json";
import TutorialsLayout from '../TutorialsLayout';
import { pythonTopics } from './pythonTopics';
import TutorialSidebar from '../TutorialSidebar';
import "../../components/WelcomePage.css";
import Footer from '../Footer';
import { Typewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';

const PythonWelcome = ()=>{
  return(
    <>
     <div className="tutorials-layout  scrollbar-none scrollbar-thumb-blue-500 px-4 py-8 w-9/12 b">
     
     <div className="tutorials-sidebar-main">
       <TutorialSidebar tutorialName={pythonTopics}/>
     </div>
    <div className="content-body">
    <div className='welcome-heading'>
    <code><Typewriter
          words={['Welcome to CodersIndia!', 'Learn Programming', 'Grow with CodersIndia!']}
          // loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></code>
    </div>
    <div className="first-section">
      <img src="" alt="Images" />
      <div className="text">
      Are you ready to embark on an exciting journey into the world of Python programming? Whether you're just starting out or looking to sharpen your skills, you've come to the right place. In this comprehensive Python Tutorial, we're here to guide you from the basics all the way to advanced techniques.

      </div>
    </div>
     <div className="tutorials-layout-footer">
       <Footer/>
     </div>
     
    </div>
     
     
   </div>
    </>
  )
}

const PythonTutorial = () => {
  return (
    <div>
      <TutorialsLayout/>
    </div>
  )
}
const Pythonintro = () => {
  return (
    <div>
      <TutorialsLayout tutorial={htmlTutorial} tutorialName={pythonTopics}/>
    </div>
  )
}

 


export {PythonWelcome,PythonTutorial,Pythonintro}
