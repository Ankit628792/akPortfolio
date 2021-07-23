import React from 'react'
import Button from './Button'
function About({ about }) {
    return (
        <div className="about flex">
            <div className="imgBx">
                <img src="https://raw.githubusercontent.com/Ankit628792/Ankit_Resume/master/ankit1.jpg?token=AMROYHQJ2XDYT7P7ETMJWKTBAOZYU" alt="" />
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
                    <Button text="Hire me" />
                    <Button text="Download CV" />
                </div>
            </div>
        </div>
    )
}

export default About
