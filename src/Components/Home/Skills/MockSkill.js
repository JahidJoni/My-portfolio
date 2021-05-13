import React from 'react';
import './MockSkill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MockSkill = ({ label, per, faClass }) => {
    return (
        <div data-aos="fade-up" className="skill__square col-3 col-sm-2 my-3 mx-auto" style={{display: 'inline', textAlign: 'center'}}>
            <FontAwesomeIcon icon={faClass} size="3x"/>
            <h6 className="mt-2">{label}</h6>
        </div>
    );
};

export default MockSkill;