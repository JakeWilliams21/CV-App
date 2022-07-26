import React from "react";
import './Education.css'

const Education = (props) => {
    return (
        <div className = 'education-form'>
            <h2>{props.title}</h2>
            <div className = 'form-div'>
            <input id = 'school' type={'text'} placeholder = 'University/School Name'/>
            <input id = 'location' type={'text'} placeholder = 'Location'/>
            <input id = 'start-date' type={'date'} placeholder = 'From'/>
            <input id = 'end-date' type={'date'} placeholder = 'To'/>
            </div>
        </div>
    )
}

export default Education;