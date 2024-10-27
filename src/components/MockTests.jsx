import React from 'react';
import {  useNavigate } from "react-router-dom";

const MockTests = () => {
    const navigate = useNavigate();
  return (
   <div className='flex justify-center'>
     <div className='mockTests-list w-10/12 py-5'>
      <div className="mockTest flex flex-col gap-5 w-max border-2 border-black-500 border-solid px-5 py-8 ronded-lg shadow-xl hover:shadow-2xl">
        <img className='h-28' src="images/python1.png" alt="..." />

        <button onClick={()=>navigate("/python-quiz-mode")} className='px-6 py-2  w-max bg-blue-700 hover:bg-[#004AAD] text-white rounded inline-flex ml-3 transition-all duration-300'>Python</button>
      </div>
    </div>
   </div>
  )
}

export default MockTests
