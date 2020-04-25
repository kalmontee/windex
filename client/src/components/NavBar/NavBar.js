import React from 'react';
import { Link } from "react-router-dom";
import Jumbotron from '../Jumbotron/Jumbotron'
import "./navbar.css";

function NavBar() {
    return (
        <div>
            <nav className='navbar'>
                <ul className="navtabs">
                    <li className="navitem navbar-title">Google Books</li>
                    <li className="navitem">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Search
                    </Link>
                    </li>
                    <li className="navitem">
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                            Saved
                    </Link>
                    </li>
                </ul>
            </nav>
            <Jumbotron />
        </div>
    )
}

export default NavBar;