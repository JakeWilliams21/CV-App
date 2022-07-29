import React from "react";
import './CV.css'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Work from "@mui/icons-material/Work";

const CV = () => {
    return (
        <div>
            <div className = 'header'>
                <div className = 'header-left'>
                    <div className = 'profile-pic'></div>
                    <h1 className = 'name'>Jake Williams</h1>
                </div>
                <div className = 'header-right'>
                    <div className = 'right-item'>
                        <LocationOnIcon />
                        <p className = 'address-info'>123 Sample Address, Columbus, Ohio</p>
                    </div>
                    <div className = 'right-item'>
                        <LocalPhoneIcon />
                        <p className = 'phone-number'>636-399-6399</p>
                    </div>
                    <div className = 'right-item'>
                        <EmailIcon />
                        <div className = 'email-address'>sample@sample.com</div>
                    </div>
                </div>
            </div>
            <div className = 'body'>
                <div className = 'about'>
                    <div className = 'body-header'>
                        <AccountCircleIcon fontSize = 'large'/>
                        <h2 className = 'title'>About Me</h2>
                    </div>
                    <hr/>
                    <div className = 'body-body'>
                        <p className = 'about-summary'>~Test~</p>
                    </div>
                </div>
                <div className = 'education'>
                    <div className = 'body-header'>
                        <SchoolIcon fontSize = 'large'/>
                        <h2 className = 'title'>Education</h2>
                    </div>
                    <hr />
                    <div className = 'body-body'>
                        <div className = 'info-title'>
                            <h3>The Ohio State University</h3>
                            <p>Fisher College of Business</p>
                        </div>
                        <div className = 'info-date'>
                            <p>2017-2022</p>
                        </div>
                    </div>
                </div>
                <div className = 'experience'>
                    <div className = 'body-header'>
                        <WorkIcon fontSize = 'large'/>
                        <h2 className = 'title'>Experience</h2>
                    </div>
                    <hr/>
                    <div className = 'body-body'>
                        <div className = 'info-title'>
                            <h3>Cigna</h3>
                            <p>Senior Contract Analyst</p>
                        </div>
                        <div className = 'info-date'>
                            <p>2021-2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV