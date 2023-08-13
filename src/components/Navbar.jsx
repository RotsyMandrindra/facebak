import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <div>
        <div class="container position-sticky z-index-sticky top-0">
            <div class="row">
                <div class="col-12">
                    <nav
                        class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div class="container">
                            <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon mt-2">
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </span>
                            </button>
                            <div class="collapse navbar-collapse" id="navigation">
                                <ul class="navbar-nav mx-auto ms-xl-auto me-xl-7">
                                    <li class="nav-item">
                                        <Link to="/" className="nav-link d-flex align-items-center me-2 active">
                                            <i className="bi bi-house-door-fill opacity-6 me-1"></i>
                                            Home
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/profil" className="nav-link me-2">
                                            <i className="bi bi-person opacity-6 me-1"></i>
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signin" className="nav-link me-2">
                                            <i className="bi bi-bell opacity-6 me-1"></i>
                                            Sign in
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link me-2">
                                            <i className="bi bi-key opacity-6 me-1"></i>
                                            Logout
                                        </Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to="/message" className="btn btn-outline-primary" id="likeArticle1">
                                            <i className="bi bi-envelope"></i> Message
                                        </Link>
                                    </li>
                                </ul>

                                <ul className="navbar-nav d-lg-block d-none">
                                    <li className="nav-item">
                                        <Link to="/profile" className="mb-0 me-1">
                                            <img src="./img/team-1.jpg" alt="Profile Avatar" className="profile-avatar2" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
}