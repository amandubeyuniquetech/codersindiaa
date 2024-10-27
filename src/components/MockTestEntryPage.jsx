import React from 'react';
import './MockTestEntryPage.css';
import { NavLink } from 'react-router-dom';



const MockTestEntryPage = () => {
  return (
    <div className='mock-test-entry-page'>
      <div className="left-side">
        <h1 className='main-heading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aperiam deserunt praesentium animi saepe eligendi porro maiores iusto rem pariatur?</p>
        <div className="level-button">
            <NavLink to='/python-mock-test-page-l1' className="easy-button mode-button">Level-1</NavLink>
            <NavLink to='/python-mock-test-page-l2' className="medium-button mode-button">Level-2</NavLink>
            <NavLink to='/python-mock-test-page-l3' className="hard-button mode-button">Level-3</NavLink>
        </div>
      </div>
      <div className="right-side">
        <img src="/images/mock-test-entry-page-right-img.png" alt="" />
      </div>
    </div>
  )
}

export default MockTestEntryPage
