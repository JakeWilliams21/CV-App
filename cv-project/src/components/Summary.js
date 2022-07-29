import React from "react";
import './Summary.css'

const Summary = (props) => {


    return (
        <div className="summary-div">
            <h2>{props.title}</h2>
            <div className = 'summary-form'>
                <textarea name = 'summary' placeholder="Write your Summary here"></textarea>
            </div>
        </div>
    )
}

export default Summary;