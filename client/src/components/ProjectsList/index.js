import React, { useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
    return (
    <div className="container mt-3" style={{ backgroundColor: 'white', height: '45rem' }}>
                <div className="row p-5">
                    <h2>Projects</h2>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <Link to="/steps" className="col-2" style={{ textDecoration: 'none', color: 'black' }}>
                        <h5>Example Project 1</h5>
                    </Link>
                    <div className="progress col-3 mx-3 p-0" role="progressbar" aria-label="Example with label" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar"
                            style={{ width: '50%', backgroundImage: 'linear-gradient(to right, #3120E0,  #21E1E1)' }}>
                            50%
                        </div>
                    </div>
                    <button className="btn btn-outline col-1 mx-2">Edit</button>
                    <button className="btn btn-delete col-1 mx-2">Delete</button>
                </div>

                <div className="row d-flex align-items-center justify-content-center mt-5">
                    {/* <button className="btn btn-main col-2">Add New Project</button>  */}

                    <button type="button" className="btn btn-main col-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add New Project
                    </button>
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Project</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form className="row g-3">
                                    <div className="col-12">
                                        <label for="projectTitle" className="form-label">Project Title</label>
                                        <input type="" className="form-control" id="inputProjectTitle" />
                                    </div>
                                    <div className="col-12">
                                        <label for="projectDescription" className="form-label">Description</label>
                                        <input type="" className="form-control" id="inputProjectDescription" />
                                    </div>

                                    <div className="col-12">
                                        <label for="inputState" className="form-label">Choose an optional Template</label>
                                        <select id="inputState" className="form-select">
                                            <option selected>Choose an option...</option>
                                            <option value="language">Language</option>
                                            <option value="savings">Savings Goal</option>
                                            <option value="instrument">Instrument</option>
                                        </select>
                                    </div>

                                    {/* <input type="submit" value="signup" className="signup-button" />
                            <br>  */}
                                </form>
                                <div className="modal-footer mt-4">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-main">Save Project</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
    );
};

export default ProjectsList;