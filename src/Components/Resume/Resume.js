import React from 'react';
import photo from '../../images/main.jpg'
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';


const Resume = () => {
    const customTheme = {
        yearColor: '#405b73',
        lineColor: '#d0cdc4',
        dotColor: '#262626',
        borderDotColor: '#d0cdc4',
        titleColor: '#405b73',
        subtitleColor: '#bf9765',
        textColor: '#262626',
    };
    return (
        <section>
            <div>
                <div style={{ color: '#fde3a7', backgroundColor: '#0f0f0f' }} className="text-center py-5">
                    <img src={photo} alt="" style={{ border: '3px solid #FDE3A7', borderRadius: '40%', width: '10%' }} />
                    <h2 className="pt-4">JAHID HASAN JONI</h2>
                    <h4>Front End Web Developer</h4>
                </div>
                <div style={{ backgroundColor: '#00e991' }}>
                    <p className="container py-3">
                        Motivated junior web developer looking for a role as front-end web developer. Passionate about building
                        first-class web applications. Developed some projects like e-commerce web app, customer web portal and ride booking service website.
                    </p>
                </div>
                <div className="container" data-aos="zoom-out-left">
                    <div className="row p-3">
                        <div className="col-md-6 p-3">
                            <h3>Skills - </h3>
                            <div className="container p-3">
                                <ul>
                                    <li><b>Comfortable : </b> JavaScript, React JS, HTML5, CSS3, Bootstrap, Node JS, Express Js, Mongo DB. </li> <br />
                                    <li><b>Familiarity : </b> TypeScript, Next JS, Material UI, Redux, Tailwind, PHP, Python. </li> <br />
                                    <li><b>Tools : </b> Git, VS Code, Chrome Dev Tool, Firebase. </li>
                                </ul>
                            </div>
                            <br />
                            <h3>Recent Projects - </h3>
                            <div className="container p-3">
                                <ul>
                                    <li>
                                        <h5>Car Service</h5>
                                        <p><small>A full stack website for car servicing shop with admin dashboard. Some features like authentication, customer reviews, booking services for customer with payment gateway included.</small> <br />
                                            <a href="https://car-service-72120.web.app/">Live site</a>
                                            <a className="m-3" href="https://github.com/JahidJoni/car-service-client">Client code</a> <a href="https://github.com/JahidJoni/car-service-server">Server code</a></p></li>
                                    <li>
                                        <h5>Book House</h5>
                                        <p><small>With custom API this project developed by React and node JS. Order placing system by user and add books by admin are available. Responsive design and dynamic functionality also included.</small> <br />
                                            <a href="https://book-house-2f050.web.app/">Live Site</a>
                                            <a className="m-3" href="https://github.com/JahidJoni/book-house-client">Client Code</a>
                                            <a href="https://github.com/JahidJoni/book-house-server">Server Code</a>
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Wild Ride</h5>
                                        <p><small>Dynamic route, Sign-In and Sign-Up, Google map features developed for user experience. Choosing and booking a ride by user is main part of this project</small>
                                            <br />
                                            <a href="https://wild-ride-25c6a.firebaseapp.com/">Live Site</a>
                                            <a className="m-3" href="https://github.com/JahidJoni/Wild-ride">Client Code</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <h3>Education - </h3>
                            <div className="container">
                                <Timeline theme={customTheme} dateFormat='ll'>
                                    <Container>
                                        <YearContent startDate='2013' currentYear />
                                        <BodyContent>
                                            <Section title='Computer Science and Engineering'>
                                                <Description variant='subtitle' text='Southeast University' />
                                                <Description text='4 years Duration Bachelors of computer science' />
                                            </Section>

                                            <Section title='Diploma in Computer Technology '>
                                                <Description variant='subtitle' text='Mymensingh polytechnic Institute' />
                                                <Description text='4 years duration, Diploma in engineering' />
                                            </Section>
                                        </BodyContent>
                                    </Container>
                                </Timeline>
                            </div> <br />
                           <div className="p-3">
                           <h3>Personal Skills - </h3>
                            <div className="container p-3">
                                <ul>
                                    <li>Creativity</li>
                                    <li>Team Work</li>
                                    <li>Hard Work</li>
                                    <li>Problem Solving</li>
                                    <li>Content Writing</li>
                                </ul>
                            </div>
                            </div> <br/>
                            <div className="p-3">
                            <h3>Hobby And Interests - </h3>
                            <div className="container p-3">
                                <ul>
                                    <li>Reading Blog and Magazine</li>
                                    <li>Learning about new technology</li>
                                    <li>Research about upcoming technology</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-1">
                    <a href={`https://drive.google.com/uc?export=download&id=1xw469zQP3bnjK1H0KK-QD6_YMZ2d_58i`} className="btn px-3" style={{ backgroundColor: '#00e991' }}>Download My Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Resume;