import React from "react";
import "./Navigation.styles.css";

export const Navigation = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-links">
                <a id="home-nav-link" className="nav-link" href="/">Home</a>
                <a id="tasks-nav-link" className="nav-link" href="/tasks">Tasks</a>
                <a id="schedule-nav-link" className="nav-link" href="/schedule">Schedule</a>
            </div>
        </nav>
    );
}