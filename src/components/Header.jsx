import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <link to="/">Hero</link>
                    </li>
                    <li>
                        <link to="/about">About</link>
                    </li>
                    <li>
                        <link to="/projects">Projects</link>
                    </li>
                    <li>
                        <link to="/technologies">Technologies</link>
                    </li>

                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

export default Header