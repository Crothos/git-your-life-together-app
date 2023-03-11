import React from 'react';

const Navbar = () => {
    return (

        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="GYLTlogo.png" alt="Logo" height="50" class="d-inline-block" />
                </a>

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">My Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Ask Chat GPT</a>
                    </li>
                    <button class="btn btn-main" type="button">Logout</button>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;