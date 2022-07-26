import React from "react";
import './Experience.css'

const Experience = (props) => {

    return (
        <div className="experience-form">
            <h2>{props.title}</h2>
            <div className="input-div">
                <input type={'text'} placeholder = 'Employer' id = 'employer'/>
                <input type={'text'} placeholder = 'Role' id = 'role'/>
                <input type={'date'} placeholder = 'From' id = 'from'/>
                <input type={'date'} placeholder = 'To' id = 'to'/>
            </div>
        </div>
    )
}

export default Experience;