import React from 'react';
import './QuizesMode.css';
import { NavLink } from 'react-router-dom';

const QuizesMode = () => {
  return (
    <div id='quizes-mode'>
      <div className='modes-wrapper'>
        <div className="mode">
         <h1>Easy</h1>
         
         <NavLink to='/python-mock-test1' className='test-link'>Mock Test - 01</NavLink>
         <NavLink to='/python-mock-test2' className='test-link'>Mock Test - 02</NavLink>
         <NavLink to='/python-mock-test3' className='test-link'>Mock Test - 03</NavLink>
         <NavLink to='/python-mock-test4' className='test-link'>Mock Test - 04</NavLink>
         <NavLink to='/python-mock-test5' className='test-link'>Mock Test - 05</NavLink>
         <NavLink to='/python-mock-test6' className='test-link'>Mock Test - 06</NavLink>
         <NavLink to='/python-mock-test7' className='test-link'>Mock Test - 07</NavLink>
         <NavLink to='/python-mock-test8' className='test-link'>Mock Test - 08</NavLink>
         <NavLink to='/python-mock-test9' className='test-link'>Mock Test - 09</NavLink>
         <NavLink to='/python-mock-test10' className='test-link'>Mock Test - 10</NavLink>
         
        </div>
        <div className="mode">Medium</div>
        <div className="mode">Hard</div>
      </div>
    </div>
  )
}

export default QuizesMode
