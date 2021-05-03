import React from 'react';

const skillsBar = [
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },{
        name: "CSS3",
        faClass: "fab fa-css3"
    },{
        name: "Javascript",
        faClass: "fab fa-js"
    },{
        name: "SASS",
        faClass: "fab fa-sass"
    },{
        name: "Node",
        faClass: "fab fa-node"
    },{
        name: "Python",
        faClass: "fab fa-python"
    },{
        name: "Java",
        faClass: "fab fa-java"
    },{
        name: "PHP",
        faClass: "fab fa-php"
    },{
        name: "Database",
        faClass: "fas fa-database"
    },{
        name: "AWS",
        faClass: "fab fa-aws"
    },{
        name: "Docker",
        faClass: "fab fa-docker"
    },{
        name: "NPM",
        faClass: "fab fa-npm"
    },{
        name: "Heroku",
        faClass: "fas fa-h-square"
    },{
        name: "Swift",
        faClass: "fab fa-swift"
    },{
        name: "Linux",
        faClass: "fab fa-linux"
    },{
        name: "Wordpress",
        faClass: "fab fa-wordpress"
    }
]

const MockSkill = () => {
    return (
        <div>
            {<div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                         <div data-aos="fade-up" className="skill__square col-3 col-sm-2 my-3 mx-auto" style={{display: 'inline', textAlign: 'center'}}>
                         <i className={`${x.faClass} mx-auto my-auto`}></i>
                         <h6 className="mt-2">{x.name}</h6>
                     </div>
                    )}
                </div> 
            </div>
            }
        </div>
    );
};

export default MockSkill;