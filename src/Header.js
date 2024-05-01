import React from 'react';
import './Header.css';

function Header(){
    return (
        <div className="header">
            {/* <input type="dropdown"></input> */}
            <input type="search" placeholder="Search here..."></input>
        </div>
    );
}
export default Header;