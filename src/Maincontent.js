import "./Maincontent.css";
import { useState } from "react";

function Maincontent() {
    const [isOpen, setIsOpen]=useState(false);
    const [selectedOption, setSelectedOption]=useState("Select Range");
    const toggleDropdown=()=>setIsOpen(!isOpen);
    const dropdownHandler=(option)=>{
        setSelectedOption(option);
    }
  return (
    <div className="main-content">
      <div className="section section1">
        <p>Consultants</p>
      </div>
      <div className="section section2">
        Filters
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-btn range-btn">{selectedOption}  ⌵</button>
          {isOpen && (
            <div className="dropdown-menu range-btn">
              <a href="/" onClick={() => dropdownHandler("range1")}>Range1</a>
              <a href="/" onClick={() => dropdownHandler("Range2")}>Range2</a>
            </div>
          )}
        </div>
        <label>
          <input type="radio" />
          Summary
        </label>
        <label>
          <input type="radio" />
          Branchwise
        </label>
      </div>
      <div className="section section3">
        <div className="sub-section">
            <div className="content">
                <h4>Consultant count</h4>
                <span style={{fontWeight:"bold"}}>90/900</span>
                <span>Today/Period</span>
            </div>
            <img src="../images/logo1.png" alt="logo1" className="icon"/>
        </div>
        <div className="sub-section">
            <div className="content">
                <h4>Consultations</h4>
                <span style={{fontWeight:"bold"}}>11/25</span>
                <span>Today/Period</span>
            </div>
            <img src="../images/logo2.png" alt="logo2" className="icon"/>
        </div>
        <div className="sub-section">
            <div className="content">
                <h4>Labs</h4>
                <span style={{fontWeight:"bold"}}>25/560</span>
                <span>Today/Period</span>
            </div>
            <img src="../images/logo3.png" alt="logo3" className="icon"/>
        </div>
        <div className="sub-section">
            <div className="content">
                <h4>Diet plans</h4>
                <span style={{fontWeight:"bold"}}>25/250</span>
                <span>Today/Period</span>
            </div>
            <img src="../images/logo4.png" alt="logo4" className="icon"/>
        </div>
      </div>
      <div className="section section4">
        <h3>Consultants</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Patient Count</th>
                    <th>Labs</th>
                    <th>Diet Plan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Smith</td>
                    <td>12</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>8</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Mark Johnson</td>
                    <td>6</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Mary Lee</td>
                    <td>10</td>
                    <td>4</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>David Chen</td>
                    <td>14</td>
                    <td>5</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Emily</td>
                    <td>5</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}
export default Maincontent;
