import React, { useState } from 'react';
import './TutorialSidebar.css';
// import { pythonTopics } from '../components/Python/pythonTopics';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { NavLink } from 'react-router-dom';

const TutorialSidebar = (props) => {
  const [expandedItems, setExpandedItems] = useState({});
  const toggleSubItems = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id] // Toggle the current state
    }));
  };

  const TutorialName = props.tutorialName;
  return (
   <div className='flex '>
     <nav className="sidebar" id='style-2'>
      <ul >
        {TutorialName.sidebar.map((item) => (
          <li key={item.id}>
            {/* Toggle sub-items on click */}
            <div onClick={() => toggleSubItems(item.id)} className="title">
              <NavLink to={item.link}>{item.title}</NavLink>
              <div>{item.subItems? <ArrowDropDownCircleIcon style={{fontSize:"1.3rem"}}/>:""}</div>
            </div>

            {/* Conditionally render sub-items based on state */}
            {item.subItems && expandedItems[item.id] && (
              <ul className="subItems">
                {item.subItems.map((subItem) => (
                  <li key={subItem.id}>
                    <NavLink to={subItem.link} className='subItem' >{subItem.title}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
    {/* <TutorialsLayout/> */}
   </div>
  )
}

export default TutorialSidebar
