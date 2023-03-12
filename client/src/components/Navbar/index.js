import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="GYLTlogo.png" alt="Logo" height="50" className="d-inline-block" />
                </a>

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">My Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ask Chat GPT</a>
                    </li>
                    <Link to="/"><button className="btn btn-main" type="button">Logout</button></Link>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;