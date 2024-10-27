import { NavLink } from "react-router-dom";
import "../../src/App.css";
import { useState, useContext } from "react";
import { InputContext } from "../Context/InputContext";

const Navbar = () => {
  // State to handle the visibility of the dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
  };

  const handleMouseEnter = () => {
    setIsDropdownVisible(true); // Show dropdown on hover
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false); // Hide dropdown when mouse leaves
  };
  const { inputValue } = useContext(InputContext);
  return (
    <header id="navbar" className="h-16  flex items-center shadow-sm ">
      <nav className="flex justify-between items-center w-9/12 mx-auto">
        <a href="/" className="text-zinc-800 font-bold uppercase">
          <img
            id="codersIndia-logo"
            style={{ height: "170px" }}
            src="/images/white-back-logo.png"
            alt="logo"
          />
        </a>
        <div className="space-x-5 flex items-center">
          <ul className="space-x-5 sm:flex hidden">
            <li
              className="hover:text-[#004AAD] nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/">Mock Test</a>
              {isDropdownVisible && (
                <ul className="dropdown-content">
                  <NavLink className="dropdown-item" to="/mock-test-python">
                    Python
                  </NavLink>
                  {/* <NavLink className="dropdown-item" to="/">HTML</NavLink>
                            <NavLink className="dropdown-item" to="/">HTML</NavLink>
                            <NavLink className="dropdown-item" to="/">HTML</NavLink>
                            <NavLink className="dropdown-item" to="/">HTML</NavLink> */}
                </ul>
              )}
            </li>
            {/* <li className="hover:text-[#004AAD] nav-item"><a href="/">Mock Tests</a></li> */}
            {/* <li className="hover:text-[#004AAD] nav-item"><a href="/">About us</a></li> */}
          </ul>
          <button className="font-medium px-5 py-1 border border-[#004AAD] rounded text-[#004AAD]">
            {inputValue}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
