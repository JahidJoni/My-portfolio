import React from 'react';
import './SharedFooter.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const SharedFooter = () => {
    return (
        <div class="footer-basic bg-dark">
            <footer>
                <div class="social">
                    <a href="https://www.facebook.com/jhj.joni/" target="blank"> <FontAwesomeIcon icon={faFacebook}/> </a>
                    <a href="https://www.linkedin.com/in/jahid-joni/" target='blank'><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="https://twitter.com/_jahidjoni" target="blank"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://github.com/JahidJoni" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item"> <Link to='/'>Home </Link></li>
                    <li class="list-inline-item"><a href="#">Services</a></li>
                    <li class="list-inline-item"><a href="#">About</a></li>
                    <li class="list-inline-item"><a href="#">Terms</a></li>
                    <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p class="copyright">JAHID JONI © 2022</p>
            </footer>
        </div>
    );
};

export default SharedFooter;