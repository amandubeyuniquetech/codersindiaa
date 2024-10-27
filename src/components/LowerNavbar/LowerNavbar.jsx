import React, { useState } from 'react';
import "./LowerNavbar.css";
import LowerNavbarDropdown from '../LowerNavbarDropdown/LowerNavbarDropdown';


const LowerNavbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHover =()=>{
    setDropdown(true)
  }
  return (
    <>
    <div id='lower-navbar'>
      <div className="lower-nav-item" onMouseEnter={dropdownHover} onMouseOutCapture={()=>{setDropdown(false)}}>PYTHON
      {dropdown && <LowerNavbarDropdown/>}
      </div>
      <div className="lower-nav-item">NUMPY</div>
      <div className="lower-nav-item">PANDAS</div>
      <div className="lower-nav-item">JAVA</div>
      <div className="lower-nav-item">C++</div>
      <div className="lower-nav-item">C#</div>
      <div className="lower-nav-item">GO</div>
      <div className="lower-nav-item">RUST</div>
      <div className="lower-nav-item">SQL</div>
      <div className="lower-nav-item">HTML</div>
      <div className="lower-nav-item">CSS</div>
      <div className="lower-nav-item">JavaScript</div>
      <div className="lower-nav-item">ReactJS</div>
      <div className="lower-nav-item">NodeJS</div>
      <div className="lower-nav-item">PHP</div>
    </div>
    
    </>
  )
}

export default LowerNavbar
