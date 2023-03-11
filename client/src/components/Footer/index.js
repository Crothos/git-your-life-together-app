import React from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  //const location = useLocation();
  //const navigate = useNavigate();
  return (
     <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-2 item">
                        <h3>Jessica Ortega </h3>
                        <ul>
                            <li><a href="https://github.com/JessicaIOrtega">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-2 item">
                        <h3>Camelia Benavides </h3>
                        <ul>
                            <li><a href="https://github.com/cameliabenavides10">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-2 item">
                        <h3>Michael Escamilla</h3>
                        <ul>
                            <li><a href="https://github.com/mescamilla1114">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-2 item">
                        <h3>Brett Nachman</h3>
                        <ul>
                            <li><a href="https://github.com/brettnachman">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-2 item">
                        <h3>Stephen Totten</h3>
                        <ul>
                            <li><a href="https://github.com/Crothos">GitHub</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-2 item">
                        <p class="copyright">Codebusters © 2023</p>
                    </div>
                </div>
            </div>   
    </footer>
</div>

  );
};

export default Footer;
