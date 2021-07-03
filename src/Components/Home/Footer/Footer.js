import React from 'react';
import Contact from '../../Contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <section className="mt-5" style={{backgroundColor: '#0f0f0f'}}>
            <div className="row">
                <div style={{backgroundColor: '#00e991'}} className="col-md-6">
                    <div className="text-dark text-start p-5">
                    <h2>Just Say Hi.</h2>
                    <p>
                        I'm always open to discuss your project and talk about new things.
                    </p>
                    </div>
                    <div className="row mt-2 p-5">
                        <div className="">
                            <h3>Mail me - </h3>
                            <h4>jh.joni07@gmail.com</h4>
                        </div>
                        <div className="mt-5">
                            <h3>Follow Me - </h3>
                            <div className="d-flex justify-content-center">
                            <div className="mt-4">
                            <a href={`https://www.facebook.com/jhj.joni`} className="icon"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
                            <a href={`https://twitter.com/_jahidjoni`} className="icon"><FontAwesomeIcon icon={faTwitter} size="3x"/></a>
                            <a href={`https://github.com/JahidJoni`} className="icon"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                            <a href={`https://www.linkedin.com/in/jahid-joni/`} className="icon"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Contact></Contact>
                </div>
            </div>
        </section>
    );
};

export default Footer;