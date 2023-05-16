import React from "react";
import { Link,useLocation } from "react-router-dom";

export default function Profile() {

    const location = useLocation()
  

    return (
        <div className="profile--page">
            <h1>You are at {location.pathname}</h1>
            <h1>Joshua Ombasa Nyambega</h1>
            <p>22 years</p>
            <ul>
                <li>Electrical Engineering</li>
                <li>Computer science</li>
                <li>LPIC SYS-ADMIN</li>
            </ul>
        </div>
    )
}