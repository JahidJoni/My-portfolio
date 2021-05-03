import React from 'react';
import frontEnd from '../../../images/icons8-html-100.png'
import backEnd from '../../../images/icons8-source-code-100.png'
import git from '../../../images/icons8-github-48.png'
import photoShop from '../../../images/icons8-adobe-photoshop-100.png'
import MockSkill from './MockSkill';

const skills = [
    {
        name: "Front End Development",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci facilis tempore nisi.",
        icon: frontEnd
    },
    {
        name: "Back End Development",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci facilis tempore nisi.",
        icon: backEnd
    },
    {
        name: "Git Version Control",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci facilis tempore nisi.",
        icon: git
    },
    {
        name: "Photoshop Design",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci facilis tempore nisi.",
        icon: photoShop
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
                                <h5 className="card-title" style={{ color: "#00e991" }}>{skill.name}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="mt-5">
                <h2 style={{ color: "#00e991" }} className="text-center mt-4">Skill-Set</h2>
            </div>
                <div className="row mt-3">
                   <MockSkill></MockSkill>
                </div>
        </section>
    );
};

export default Skills;