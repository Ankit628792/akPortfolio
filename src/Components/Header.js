import React from 'react'
import Button from './Button'
import ReactTypingEffect from 'react-typing-effect';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';

function Header({data}) {
    return (
        <>
        <div className="header">
            <img className="header__image" src="https://raw.githubusercontent.com/Ankit628792/ankitresume.tk/main/ankitresume.tk/assets/img/banner-image.png?token=AMROYHUOLPJZXPY7BLJF7FLBAOZ5I" alt="" />
            <h1 className="big-h">
                Hello! <br /> I'm Ankit Kumar&nbsp;<br />
                <span className="span-text">
                    <ReactTypingEffect
                        text={["Freelancer", "UI/UX Developer", "MERN Stack Developer"]}
                    />
                </span>
                <br className="break" />Based in <span className="span-text">New Delhi </span>
            </h1>
            <NavLink to="/contact">
            <Button text="Let's Chat" />
            </NavLink>
            <ul className="social flex">
                <li><a href="https://github.com/Ankit628792/" target="_blank" rel="noreferrer"><GitHubIcon className="social__icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/ankit628792/" target="_blank" rel="noreferrer"><LinkedInIcon className="social__icon" /></a></li>
                <li><a href="https://www.instagram.com/ankit_628792/" target="_blank" rel="noreferrer"><FacebookIcon className="social__icon" /></a></li>
                <li><a href="https://www.instagram.com/ankit_628792/" target="_blank" rel="noreferrer"><InstagramIcon className="social__icon" /></a></li>
            </ul>
        </div>
        </>
    )
}

export default Header
