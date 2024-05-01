import React from 'react';
import './NavBar.css'

function NavBar({links}){
    return(
        <nav className="navbar">
            <ul className="navlinks">
                {links.map(link=>(
                    <li key={link.title}><a href={link.href}>{link.title}</a></li>
                ))}
            </ul>
        </nav>
    );
}
export default NavBar;