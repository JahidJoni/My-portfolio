import React from 'react';
import car from '../../images/tablet-in-hand-mockup.png'
import book from '../../images/notebook-mockup-on-desk.png'
import ride from '../../images/imac-screen-mockup.png'
import fantasy from '../../images/fantasy.png'
import epl from '../../images/league.png'
import ticket from '../../images/ticket.png'
import { Link } from 'react-router-dom'
import './Projects.css'
import SharedFooter from '../SharedFooter/SharedFooter';


const projects = [
    {
        name: "Car Service Web App",
        details: "A full stack website for car servicing shop with admin dashboard. Some features like authentication, customer reviews, booking services for customer with payment gateway included",
        features: [
        "Stripe payment method ", "Service booking system", "Service management by admin", "Customer review section",
        "Firebase Authentication", "Responsive design"
    ],
        site: "car-service-72120.web.app/",
        client: "github.com/JahidJoni/car-service-client",
        server: "github.com/JahidJoni/car-service-server",
        image: car
    },
    {
        name: "Book selling e-commerce",
        details: "With custom API this project developed by React and node JS. Order placing system by user and add books by admin are available. Responsive design  and dynamic functionality also included.",
        features: ["Order books for delivery", "books management by admin", "PrivateRoute System", "Authentication", "Responsive UI"],
        site: "book-house-2f050.web.app/",
        client: "github.com/JahidJoni/book-house-client",
        server: "github.com/JahidJoni/book-house-server",
        image: book
    },
    {
        name: "Wild Ride",
        details: "A ride sharing web app with dynamic route, Sign-In and Sign-Up, Google map features developed for user experience Choosing and booking a ride by user is main part of this project.",
        features:["Different types of ride", "Choosing and booking ride", "Cost calculation", 'Custom Authentication'],
        site: "wild-ride-25c6a.firebaseapp.com/",
        client: "github.com/JahidJoni/Wild-ride",
        server: "",
        image: ride
    },
    {
        name: "Fantasy Club",
        details: "A simple team building web app with fake data. Player hiring cost and total hiring calculated and displayed on Homepage.",
        features: ["Players provided for hiring", "Hiring cost calculation", "Total hiring calculation"],
        site: "fantasy-football-jahidjoni.netlify.app/",
        client: "github.com/JahidJoni/fantasy-football-team",
        server: "",
        image: fantasy
    },
    {
        name: "Soccer League",
        details: "From sports DB API, this site is built for English league. All first division clubs are available with details and description. Team details can be seen by a click, with dynamic route this systemis developed.",
        features: ["English Premiere league clubs", "Pros and Cons of every club", "Router System", "Responsive design"],
        site: "premiere-league-jahidjoni.netlify.app/",
        client: "github.com/JahidJoni/Premiere-league",
        server: "",
        image: epl
    },
    {
        name: "Retro Blogger",
        details: "A MERN stack project for blogging platform for posting blogs. Reading blogs by authentication for user and manage blogs post by admin features included.",
        features: ["Blogs on Homepage", "Continue Reading by log in", "Posting Blogs by admin", "Blog Management by admin"],
        site: "retro-blog-cb973.web.app/",
        client: "github.com/JahidJoni/Retro-Blogger",
        server: "github.com/JahidJoni/Retro-blog-server",
        image: ticket
    }

]


const Projects = () => {
    return (
        <section className="bg-light">
            <h2 className="text-center text-uppercase pt-5" style={{ color: '#00e991' }}>My Recent Projects you can see.</h2>
            <div className="mt-5">
                {
                    projects.map(project => <div className="d-flex justify-content-center">
                        <div id="project-card" data-aos="zoom-in">
                            <div class="product-details">

                                <h3>{project.name}</h3>

                                <p class="information my-3">{project.details}</p>
                                <div class="control mt-3 text-center">
                                   
                                   <div className=''>
                                   <a className='btn btn-outline-info btn-sm m-2' href={`https://${project.client}`}>Client Code</a>
                                    {project.server && <a className='btn btn-outline-info btn-sm m-2' href={`https://${project.server}`}>Server Code</a>}
                                   </div>

                                   <a className="btn my-3 btn-outline-success btn-sm px-4" href={`https://${project.site}`}>Visit Site</a>
                                </div>
                            </div>

                            <div class="product-image">
                                <img src={project.image} alt="" />
                                <div class="card-info">
                                    <h2 className="py-3"> Features - </h2>
                                    <ul>
                                        {
                                            project.features.map(feature => <li className="feature-list">{feature}</li>)
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <SharedFooter></SharedFooter>
        </section>
    );
};

export default Projects;