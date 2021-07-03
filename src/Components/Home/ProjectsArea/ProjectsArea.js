import React from 'react';
import car from '../../../images/tablet-in-hand-mockup.png'
import book from '../../../images/notebook-mockup-on-desk.png'
import ride from '../../../images/imac-screen-mockup.png'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegramPlane, faGithub } from '@fortawesome/free-brands-svg-icons'
import './ProjectsArea.css'

const projects = [
    {
        name: "Repaint - Car Service",
        details: "A website for car servicing company where users can book services as his/her demand. Admin dashboard feature available for authority. Payment service, full backend support, user reviews, servicing status and some more needed features are included.",
        site: "car-service-72120.web.app/",
        repo: "github.com/JahidJoni/car-service-client",
        image: car
    },
    {
        name: "Book House",
        details: "A book selling e-commerce website where users can choose his/her book and place order for it. Add and managing books by admin is the core feature of this project. Authentication and private routing included.",
        site: "book-house-2f050.web.app/",
        repo: "github.com/JahidJoni/book-house-client",
        image: book
    },
    {
        name: "Wild Ride",
        details: "Ride sharing web service with firebase authentication. Features of this project is dynamic route and dynamic costing for booking ride. Google map, simple destination page ,Responsive design are bonus features of this web app.",
        site: "wild-ride-25c6a.firebaseapp.com/",
        repo: "github.com/JahidJoni/Wild-ride",
        image: ride
    }

]

const ProjectsArea = () => {
      
    return (
        <section className="container mt-3 p-3">
            <h3 data-aos="zoom-out" className="text-center" style={{backgroundColor: '#0f0f0f', color: '#FDE3A7', padding: '0.5rem 1.8rem', borderRadius: '0.3rem'}}>SOME OF MY RECENT PROJECTS</h3>
          <div className="row mt-5">
             {
                projects.map(project => <div className="col-md-4 d-flex justify-content-center my-2">
                    <div class="card my-card" style={{ width: '19rem' }} data-aos="zoom-in-up">
                        <img className="img-fluid" src={project.image} class="card-img-top" alt="" style={{height: '190px'}} />
                        <div class="card-body details">
                            <h5 class="card-title" style={{color: '#0f0f0f'}}>{project.name}</h5>
                            <p class="card-text text-secondary"><small>{project.details}</small></p>
                            <div className="d-flex justify-content-around">
                            <a className="btn btn-sm px-4 btn-link" href={`https://${project.site}`}> <FontAwesomeIcon className="project-icon" icon={faTelegramPlane} size="2x"/> </a>
                            <a className="btn btn-sm px-4 btn-link" href={`https://${project.repo}`}><FontAwesomeIcon className="project-icon" icon={faGithub} size="2x"/></a>
                            </div>
                        </div>
                    </div>
                </div>)
              }
           </div>
        </section>
    );
};

export default ProjectsArea;