import React from 'react';
import incognito from '../../../images/inco.jpg'
import './Summary.css'

const Summary = () => {
    return (
        <section className="summary mt-5 py-4">
            <div className="row">
                <div className="col-md-8 text-center">
                    <div data-aos="fade-right">
                        <h3 style={{ color: '#fde3a7' }} className="mt-2">A PASSIONATE MERN STACK DEVELOPER</h3>
                        <p className="details mt-5 container">
                            I am Jahid Hasan Joni. A motivated junior web developer looking for a role as front-end web developer. Passionate about building
                            first-class web applications. Developed some ecommerce web app, customer web portal and ride booking
                            service website. I have comfortable skills in React JS, JavaScript, ES6, HTML5, CSS3, SASS, Bootstrap, Material UI, API, Node JS and Express JS.
                        </p>
                        <div className="row details container">
                            <div className="col-md-6 d-flex justify-content-start">
                                <div>
                                    <p>Name : Jahid Hasan Joni</p>
                                    <p>Education: BSC in CSE</p>
                                    <p>Phone: +8801646407263</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-start">
                                <div>
                                    <p>Address : Uttara, Dhaka</p>
                                    <p>Interests : Coding, Writing</p>
                                    <p>Email : jh.joni07@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={incognito} alt="" className="img-fluid w-75" data-aos="fade-left"/>
                </div>
            </div>
        </section>
    );
};

export default Summary;