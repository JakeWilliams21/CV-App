import React from "react";
import './Experience.css'

const Experience = (props) => {

    return (
        <div className="experience-form">
            <div className="input-div">
                <input name = 'employer' type={'text'} placeholder = 'Employer' id = 'employer'/>
                <input name = 'role' type={'text'} placeholder = 'Role' id = 'role'/>
                <input name = 'jobFrom' type={'date'} placeholder = 'From' id = 'from'/>
                <input name = 'jobTo' type={'date'} placeholder = 'To' id = 'to'/>
            </div>
        </div>
    )
}

export default Experience;