import React,{useState, useContext} from 'react';
import { NavLink, Outlet ,useLocation} from 'react-router-dom';
import "./MockTestPage.css";
import { InputContext } from '../../Context/InputContext';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const TestEntryPage =()=>{
  const navigate = useNavigate();
  const location = useLocation();

  const [text, setText] = useState('');
  const { setInputValue } = useContext(InputContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(text); // Save the input text globally
    setText(''); // Clear the local input after submit
    if(location.pathname == '/python-mock-test-page-l1')
    {
      navigate('/python-mock-test-page-l1/mocktest-1');
    }
    else if(location.pathname == '/python-mock-test-page-l2')
    {
      navigate('/python-mock-test-page-l2/mocktest-1');
    }else if(location.pathname == '/python-mock-test-page-l3'){
      navigate('/python-mock-test-page-l3/mocktest-1');
    }
  };

  // Initialize an array of 16 empty values
  const [digits, setDigits] = useState(Array(16).fill(''));
   
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only digits (0-9)
    if (/^\d{0,1}$/.test(value)) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);

      // Move focus to the next input automatically
      if (value && index < 15) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace: move to the previous input on backspace
    if (e.key === 'Backspace' && digits[index] === '' && index > 0) {
      document.getElementById(`digit-${index - 1}`).focus();
    }
  };

  

  return(
   <>
    <div className="test-entry-page">
      <h1 className='main-heading'>Welcome to the Python Mock Test</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Your Name Here' />
      <NavLink className='start-button'  onClick={handleSubmit}>Start Test</NavLink >
      {/* <div style={{ display: 'flex', gap: '5px' }}>
      {digits.map((digit, index) => (
        <input
          key={index}
          id={`digit-${index}`}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength="1"
          style={{ width: '30px', textAlign: 'center', fontSize: '18px', border: '2px solid #004AAD'}}
        />
      ))}
    </div> */}

    </div>
   </>
  )}

export const MockTestPagel1 = () => {

  const location = useLocation();

  // Check if there's an Outlet in the current route
  const hasOutlet1 = location.pathname !=='/python-mock-test-page-l1' 
   
 // Adjust condition for your routing structure

  return (
   
      <div className="container">
        <div className="left-side">
          <nav className="vertical-nav">
          <NavLink to="/python-mock-test-page-l1/mocktest-1" className="nav-button" >
  Test-1
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-2" className="nav-button">
  Test-2
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-3" className="nav-button">
  Test-3
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-4" className="nav-button">
  Test-4
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-5" className="nav-button">
  Test-5
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-6" className="nav-button">
  Test-6
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-7" className="nav-button">
  Test-7
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-8" className="nav-button">
  Test-8
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-9" className="nav-button">
  Test-9
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-10" className="nav-button">
  Test-10
</NavLink>
<NavLink to="/python-mock-test-page-l1/mocktest-11" className="nav-button">
  Test-11
</NavLink>

          </nav>
        </div>
        <div className="right-side">
          {/* Define Routes for each page */}
          {!hasOutlet1 && <TestEntryPage />}
          <Outlet/>
          
        
                  </div>
      </div>
   
  );
};

export const MockTestPagel2 = () => {

  const location = useLocation();

  // Check if there's an Outlet in the current route
  const hasOutlet2 = location.pathname !=='/python-mock-test-page-l2' // Adjust condition for your routing structure

  return (
   
      <div className="container">
        <div className="left-side">
          <nav className="vertical-nav">
          <NavLink to="/python-mock-test-page-l2/mocktest-1" className="nav-button" >
  Test-1
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-2" className="nav-button">
  Test-2
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-3" className="nav-button">
  Test-3
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-4" className="nav-button">
  Test-4
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-5" className="nav-button">
  Test-5
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-6" className="nav-button">
  Test-6
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-7" className="nav-button">
  Test-7
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-8" className="nav-button">
  Test-8
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-9" className="nav-button">
  Test-9
</NavLink>
<NavLink to="/python-mock-test-page-l2/mocktest-10" className="nav-button">
  Test-10
</NavLink>

          </nav>
        </div>
        <div className="right-side">
          {/* Define Routes for each page */}
          {!hasOutlet2 && <TestEntryPage />}
          <Outlet/>
          
        
                  </div>
      </div>
   
  );
};


export const MockTestPagel3 = () => {

  const location = useLocation();

  // Check if there's an Outlet in the current route
  const hasOutlet3 = location.pathname !=='/python-mock-test-page-l3'    // Adjust condition for your routing structure

  return (
   
      <div className="container">
        <div className="left-side">
          <nav className="vertical-nav">
          <NavLink to="/python-mock-test-page-l3/mocktest-1" className="nav-button" >
  Test-1
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-2" className="nav-button">
  Test-2
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-3" className="nav-button">
  Test-3
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-4" className="nav-button">
  Test-4
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-5" className="nav-button">
  Test-5
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-6" className="nav-button">
  Test-6
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-7" className="nav-button">
  Test-7
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-8" className="nav-button">
  Test-8
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-9" className="nav-button">
  Test-9
</NavLink>
<NavLink to="/python-mock-test-page-l3/mocktest-10" className="nav-button">
  Test-10
</NavLink>


          </nav>
        </div>
        <div className="right-side">
          {/* Define Routes for each page */}
          {!hasOutlet3 && <TestEntryPage />}
          <Outlet/>
          
        
                  </div>
      </div>
   
  );
};


const utils = { MockTestPagel1, MockTestPagel2,MockTestPagel3 };
export default utils;