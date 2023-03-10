import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Jessica Ortega</h3>
                        <ul>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Camela Benavides</h3>
                        <ul>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Michael Escamilla</h3>
                        <ul>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Brett Nachman</h3>
                        <ul>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Stephen Totten</h3>
                        <ul>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <p class="copyright">Codebusters © 2023</p>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
