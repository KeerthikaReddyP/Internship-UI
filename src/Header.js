import React from "react";
import { useState } from "react";
import "./Header.css";

function Header() {
    const [isOpen, setIsOpen]=useState(false);
    const [selectedOption, setSelectedOption]=useState("Choose an option");
    const toggleDropdown=()=>setIsOpen(!isOpen);
    const dropdownHandler=(option)=>{
        setSelectedOption(option);
        // setIsOpen(false);
    }
  return (
    <div className="header">
      <div className="inputs">
        <button onClick={toggleDropdown} className="dropdown-btn">{selectedOption}</button>
        {isOpen && (
            <div className="dropdown-menu">
                <a href="/" onClick={()=>dropdownHandler("Patients")}>Patients</a>
                <a href="/" onClick={()=>dropdownHandler("Consultants")}>Consultants</a>
                <a href="/" onClick={()=>dropdownHandler("Others")}>Others</a>
            </div>
        )}
        <input type="search" placeholder="Search here..."></input>
      </div>
    </div>
  );
}
export default Header;
