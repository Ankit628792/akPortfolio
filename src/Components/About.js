import React from 'react'
import Button from './Button'
import {NavLink} from 'react-router-dom'
function About({ about }) {
    return (
        <div className="about flex">
            <div className="imgBx">
                <img src="https://www.dropbox.com/s/11sghf1s35ck5aa/ankit.jpg" alt="" />
            </div>
            <div className="content flex fd-column">
                <h1 className="small-h">
                    About
                </h1>
                <p>{about.about} </p> <br />
                <p>{about.about2} </p> <br />
                <p> <strong> e-Mail : </strong> {about.email} </p> <br />
                <p> <strong> Phone: </strong> {about.number} </p>
                <div className="btn-group">
                    <NavLink to="/contact"> <Button text="Hire me" /> </NavLink>
                    <a href="https://drive.google.com/file/d/1L8EszxVaDoElwJALdc5YqaTmFNtwZ4zn/view" rel="noreferrer" target="_blank"><Button text="Download CV" /></a>
                </div>
            </div>
        </div>
    )
}

export default About
