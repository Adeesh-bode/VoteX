import React from 'react';
import { useNavigate } from "react-router-dom";

// import { GoHomeFill } from "react-icons/go";
const FloatingIslandHeader = () => {
  const navigate = useNavigate();
  return (
    // Adjust positioning to be fixed on the side, for example, the left side
    <aside className=" fixed top-1/2 left-4 -translate-y-1/2 bg-white border-2 border-blue-500  shadow-lg  rounded-lg px-5 py-10 flex flex-col items-center justify-between" style={{ zIndex: 1000 }}>
      {/* Logo or Brand Name */}
      <div className="mb-10"> {/* Adjust margin as needed */}
        <h1 className="text-xl font-bold">VoteX</h1>
      </div>
      {/* Navigation Links - Adjusted for vertical layout */}
      <nav>
        <ul className="flex flex-col space-y-4"> {/* Adjust space as needed */}
          <li><a href="#home" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#about" className="text-gray-800 hover:text-gray-600" onClick={()=>navigate("/vote")} >Vote</a></li>
          <li><a href="#services" className="text-gray-800 hover:text-gray-600">Services</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default FloatingIslandHeader;
