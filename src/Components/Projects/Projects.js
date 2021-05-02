import React from 'react';
import car from '../../images/car.png'
import book from '../../images/book.png'
import ride from '../../images/ride.png'
import fantasy from '../../images/fantasy.png'
import epl from '../../images/league.png'
import ticket from '../../images/ticket.png'
import './Projects.css'


const projects = [
    {
        name: "Car Service Web App",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo sint quae, vero quam exercitationem.",
        site: "car-service-72120.web.app/",
        image: car
    },
    {
        name: "Book selling e-commerce",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo sint quae, vero quam exercitationem.",
        site: "book-house-2f050.web.app/",
        image: book
    },
    {
        name: "Ride Sharing web site",
        details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo sint quae, vero quam exercitationem.",
        site: "wild-ride-25c6a.firebaseapp.com/",
        image: ride
    },
    {
        name: "Fantasy Club Builder Web App",
        details: "hseighfiug",
        site: "fantasy-football-jahidjoni.netlify.app/",
        image: fantasy
    },
    {
        name: "Website about football league",
        details: "ewhirhwiehgiu",
        site: "premiere-league-jahidjoni.netlify.app/",
        image: epl
    },
    {
        name: "Ticket Booking Web App",
        details: "uhewfgaewgfbvg",
        site: "jahidjoni.github.io/Ticket-booking/",
        image: ticket
    }

]


const Projects = () => {
    return (
        <section className="mt-5 container">
            <h2 className="text-center" style={{color: '#00e991'}}>My Recent Projects you can see.</h2>
            <div className="row mt-5">
                {
                    projects.map(project => <div className="col-md-6">
                        <div class="card mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img className="img-fluid" src={project.image} alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{project.name}</h5>
                                        <p class="card-text">{project.details}</p>
                                        <a className="btn btn-sm px-3" style={{ backgroundColor: '#00e991' }} href={`https://${project.site}`} >Visit site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Projects;