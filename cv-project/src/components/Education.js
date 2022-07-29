import React from "react";
import './Education.css'

const Education = (props) => {
    return (
        <div className = 'education-form'>
            <div className = 'form-div'>
            <input name = 'school' type={'text'} placeholder = 'University/School Name'/>
            <input name = 'location' type={'text'} placeholder = 'Location'/>
            <input name = 'start-date' type={'date'} placeholder = 'From'/>
            <input name = 'end-date' type={'date'} placeholder = 'To'/>
            </div>
        </div>
    )
}

export default Education;