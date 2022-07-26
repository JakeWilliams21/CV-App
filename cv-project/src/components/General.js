import React from "react";
import './General.css'

const General = (props) => {
    return (
            <div className = 'general-form'>
            <h2>{props.title}</h2>
                <div className="inputs-div">
                <input onChange = {props.handleChange} name = 'name' id = 'name' type={'text'} placeholder = 'First and Last Name'/>
                <input onChange = {props.handleChange} name = 'phone' id = 'phone' type={'number'} placeholder = 'Phone'/>
                <input onChange = {props.handleChange} name = 'email' id = 'email' type={'email'} placeholder = 'Email'/>
                <input onChange = {props.handleChange} name = 'address' id = 'address' type={'text'} placeholder = 'Address'/>
                <button>📷 Upload A Photo</button>
                </div>
            </div>
    )
}

export default General;