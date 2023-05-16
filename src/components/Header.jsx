import React from "react";
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <header className="header">
            <ul className="nav-list">
                <li className="nav--item">
                    <Link to="/"  className="nav--link">Home</Link>
                </li>
                <li className="nav--item">
                    <Link to="/about" className="nav--link">About</Link>
                </li>
            </ul>
        </header>
    )
}