import React from 'react';
import frontEnd from '../../../images/icons8-html-100.png'
import backEnd from '../../../images/icons8-source-code-100.png'
import git from '../../../images/icons8-github-48.png'
import photoShop from '../../../images/icons8-adobe-photoshop-100.png'
import MockSkill from './MockSkill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const skills = [
    {
        name: "Front End Development",
        details: "Passionate front-end web developer using JavaScript, HTML5, and CSS to build all aspects of the UX and user UI for client. Specializes in using React and DOM to build e-commerce sites.",
        icon: frontEnd
    },
    {
        name: "Back End Development",
        details: "Dedicated back end developer building and optimizing the performance of user-centric, high-impact websites. Technical, analytical and problem-solving skills to create dynamic, high-speed websites.",
        icon: backEnd
    },
    {
        name: "Git Version Control",
        details: "Version control allows to keep track of developing work and helps to explore the change have made, be it data, coding scripts, notes. So i have skills on it as i want to work ethically. Clean and fresh code is priorities.",
        icon: git
    },
    {
        name: "PhotoShop Design",
        details: "For building user attractive websites nowadays designing is so much important things. For designing phtoshop working i can provide and i am also learning UI/UX design to improve my skills.",
        icon: photoShop
    }
]

const skillsBar = [
    {
        name: "HTML5",
        faClass: "faHtml5"
    }, {
        name: "CSS3",
        faClass: "fab fa-css3"
    }, {
        name: "Javascript",
        faClass: "faJs"
    }, {
        name: "TypeScript",
        faClass: "fab fa-sass"
    }, {
        name: "Node JS",
        faClass: "fab fa-node"
    }, {
        name: "React JS",
        faClass: "fab fa-python"
    }, {
        name: "Express JS",
        faClass: "fab fa-java"
    }, {
        name: "PHP",
        faClass: "fab fa-php"
    }, {
        name: "Database",
        faClass: "fas fa-database"
    }, {
        name: "Git",
        faClass: "fab fa-aws"
    }, {
        name: "Firebase",
        faClass: "fab fa-docker"
    }, {
        name: "NPM",
        faClass: "fab fa-npm"
    }, {
        name: "Heroku",
        faClass: "fas fa-h-square"
    }, {
        name: "Bootstrap",
        faClass: "fab fa-swift"
    }, {
        name: "SASS",
        faClass: "fab fa-linux"
    }, {
        name: "Wordpress",
        faClass: "fab fa-wordpress"
    }
]

const Skills = () => {
    return (
        <section className="container mt-4">
            <h2 style={{ color: "#00e991" }} className="text-center">What I do?</h2>
            <div className="row">
                {
                    skills.map(skill => <div className="col-md-3 mt-4 d-flex justify-content-center" data-aos="zoom-out-left">
                        <div class="card" style={{ width: '18rem' }}>
                            <div className="text-center"> <img src={skill.icon} class="card-img-top img-fluid w-25" alt="" /></div>
                            <div class="card-body">
                                <h5 className="card-title text-center" style={{ color: "#00e991" }}>{skill.name}</h5>
                                <p style={{ textAlign: 'justify' }} class="card-text"><small>{skill.details}</small></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="mt-5">
                <h2 style={{ color: "#00e991" }} className="text-center mt-4">Skill-Set </h2> 
            </div>
            <div id="Skills">
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) =>
                        <MockSkill faClass={x.faClass} label={x.name} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;