import React from 'react';
import photo from '../../images/main.jpg'

const Resume = () => {
    return (
        <section className="">
            <div className="">
                <div style={{ color: '#fde3a7', backgroundColor: '#0f0f0f' }} className="text-center py-5">
                    <img src={photo} alt="" style={{ border: '3px solid #FDE3A7', borderRadius: '42%', width: '10%' }} />
                    <h2 className="pt-4">JAHID HASAN JONI</h2>
                    <h4>Front End Web Developer</h4>
                </div>
                <div style={{ backgroundColor: '#00e991' }}>
                    <p className="container py-3">
                        Motivated junior web developer looking for a role as front-end web developer. Passionate about building
                        first-class web applications. Developed an ecommerce web app, customer web portal and ride booking
                        service website.
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <h3>Experiences</h3>
                            <ul>
                                <li> Built an ecommerce web app to sell products
                        online.</li>
                                <li> Designed a customer web service for a local car
                        servicing shop.</li>
                                <li> Developed a ride sharing web app with React and
                        node js.</li>
                                <li> Created a website for Premiere League where the
                        details of every teams dynamically set.</li>
                                <li> A fantasy club web app where players can be hired
                        developed with plain JavaScript and DOM.</li>
                            </ul><br />
                            <br />
                            <h3>Skills - </h3>
                            <ul>
                                <li>Comfortable : JavaScript, React JS, HTML5, CSS3, Bootstrap, Node JS, Express Js, Mongo DB</li>
                                <li>Familiarity: Next JS, Material UI, Redux</li>
                                <li>Tools: Git, VS Code, Chrome Dev Tool</li>
                            </ul>
                        </div>
                        <div className="col-md-6 p-3">
                            <h3>Education - </h3>
                            <p>Computer Science and Engineering at
                             Southeast University. <br />
                             2018-present</p>
                            <br />
                            <br />
                            <p>
                                Diploma in Computer Technology at
                                Mymensingh polytechnic Institute. <br />
                                2013-2018
                        </p>
                        <br/> <br/>
                        <h3>Personal Skill - </h3>
                        <ul>
                            <li>Creativity</li>
                            <li>Team Work</li>
                            <li>Hard Work</li>
                            <li>Problem Solving</li>
                            <li>Content Writing</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;