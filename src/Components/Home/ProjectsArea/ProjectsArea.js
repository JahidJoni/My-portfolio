import React, { useEffect } from 'react';
import car from '../../../images/tablet-in-hand-mockup.png'
import book from '../../../images/notebook-mockup-on-desk.png'
import ride from '../../../images/imac-screen-mockup.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

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
    }

]

const ProjectsArea = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,
          });
        AOS.refresh();
      }, []);
      
    return (
        <section className="mt-3 p-3">
            <h3 className="text-center" style={{backgroundColor: '#0f0f0f', color: '#FDE3A7', padding: '0.5rem 1.8rem', borderRadius: '0.3rem'}}>SOME OF MY RECENT PROJECTS</h3>
          <div className="row mt-5">
             {
                projects.map(project => <div className="col-md-4 d-flex justify-content-center my-2" data-aos="fade-up-left">
                    <div class="card" style={{ width: '18rem' }}>
                        <img className="img-fluid" src={project.image} class="card-img-top" alt="" style={{height: '190px'}} />
                        <div class="card-body details">
                            <h5 class="card-title" style={{color: '#0f0f0f'}}>{project.name}</h5>
                            <p class="card-text text-secondary"><small>{project.details}</small></p>
                            <div className="d-flex justify-content-around">
                            <a className="btn btn-sm px-4" href={`https://${project.site}`} style={{ backgroundColor: '#00e991' }}>Visit Site</a>
                            <a className="btn btn-sm px-4" href={`https://${project.site}`} style={{ backgroundColor: '#00e991' }}>Github</a>
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