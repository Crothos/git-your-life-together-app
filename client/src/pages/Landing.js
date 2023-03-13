import React from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectsList from '../components/ProjectsList';
import { Link } from 'react-router-dom';
const Landing = () => {
    //const location = useLocation();
    //const navigate = useNavigate();
    return (
        <div className="container-fluid">
            <Navbar />
            <ProjectsList />
        </div>
    );
};

export default Landing;