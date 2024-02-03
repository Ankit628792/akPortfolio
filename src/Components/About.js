import React, { useContext } from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from "../App";

function About({ about }) {
    const { state } = useContext(ThemeContext);

    return (
        <div className="about flex">
            <div className="imgBx">
                <img src={about.image} style={{ filter: `${state ? 'invert(1) saturate(1) hue-rotate(-100deg)' : 'none'}` }} alt="" />
            </div>
            <div className="content flex fd-column">
                <h1 className="small-h">
                    About
                </h1>
                <p>{about.about} </p> <br />
                <p>{about.about2} </p> <br />
                <p> <strong> e-Mail : </strong> {about.email} </p> <br />
                {/* <p> <strong> Phone: </strong> {about.number} </p> */}
                <div className="btn-group">
                    <NavLink to="/contact"> <Button text="Hire me" /> </NavLink>
                    <a href={about.resumedownload} rel="noreferrer" target="_blank"><Button text="Download CV" /></a>
                </div>
            </div>
        </div>
    )
}

export default About
