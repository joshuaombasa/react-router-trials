import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Profile from "./Profile";
export default function About() {
    return (
        <section className="about--page">
            <div className="about-page-top">
                <h1>This is the about page</h1>
                <h2><Link to="/about/profile">Profile</Link></h2>
                <ul>
                    <li><Link to="/about/serices">Services</Link></li>
                    <li><Link to="/about/contacts">Contacts</Link></li>
                    <li><Link to="/about/events">Events</Link></li>
                    <li><Link to="/about/history">History</Link></li>
                    <li><Link to="/about/products">Products</Link></li>
                </ul>
            </div>
            <div className="outlet--container">
                <Outlet />
            </div>
        </section>
    )
}