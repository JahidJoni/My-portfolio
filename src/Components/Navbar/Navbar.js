import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{backgroundColor: '#0f0f0f'}} class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid ms-5">
                <Link to='/' class="navbar-brand" style={{color: '#fde3a7'}}>Jahid Joni</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mx-5">
                        <li class="nav-item mx-4">
                            <Link to='/' class="nav-link" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link to='/projects' class="nav-link" href="#">Projects</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link to='/blogs' class="nav-link" href="#">Blogs</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link to='/resume' class="nav-link" href="#">Resume</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link to='/contact' class="nav-link" href="#">Contact me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;