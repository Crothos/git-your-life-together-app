import React from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';

const Landing = () => {
  //const location = useLocation();
  //const navigate = useNavigate();
  return (
        <div class="container">
        <div class="row p-5">
            <h2>Projects</h2>
        </div>

        <div class="row d-flex align-items-center justify-content-center">
            <a class="col-2" href="/">
                <h5>Example Project 1</h5>
            </a>
            <div class="progress col-3 mx-3 p-0" role="progressbar" aria-label="Example with label" aria-valuenow="50"
                aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar">
                    50%
                </div>
            </div>
            <button class="btn btn-outline col-1 mx-2">Edit</button>
            <button class="btn btn-delete col-1 mx-2">Delete</button>
        </div>

        <div class="row d-flex align-items-center justify-content-center mt-3">
            <a class="col-2" href="/">
                <h5>Example Project 2</h5>
            </a>
            <div class="progress col-3 mx-3 p-0" role="progressbar" aria-label="Example with label" aria-valuenow="30"
                aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar">
                    30%
                </div>
            </div>
            <button class="btn btn-outline col-1 mx-2">Edit</button>
            <button class="btn btn-delete col-1 mx-2">Delete</button>
        </div>

        <div class="row d-flex align-items-center justify-content-center mt-5">


            <button type="button" class="btn btn-main col-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add New Project
            </button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Project</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <form class="row g-3">
                            <div class="col-12">
                                <label for="projectTitle" class="form-label">Project Title</label>
                                <input type="" class="form-control" id="inputProjectTitle"/>
                            </div>
                            <div class="col-12">
                                <label for="projectDescription" class="form-label">Description</label>
                                <input type="" class="form-control" id="inputProjectDescription"/>
                            </div>

                            <div class="col-12">
                                <label for="inputState" class="form-label">Choose an optional Template</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose an option...</option>
                                    <option value="language">Language</option>
                                    <option value="savings">Savings Goal</option>
                                    <option value="instrument">Instrument</option>
                                </select>
                            </div>
                        </form>
                        <div class="modal-footer mt-4">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-main">Save Project</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>


  );
};

export default Landing;