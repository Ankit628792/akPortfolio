import React from 'react'
import Button from './Button'
import ReactTypingEffect from 'react-typing-effect';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header({ data }) {
    return (
        <>
            <div className="header">
                <img className="header__image" src="image/banner-image.png" alt="" />
                <h1 className="big-h">
                    Hello! <br /> I'm Ankit Kumar&nbsp;<br />
                    <span className="span-text">
                        <ReactTypingEffect
                            speed={100}
                            eraseSpeed={50}
                            text={["Freelancer", "Frontend Developer", "Product Engineer"]}
                        />
                    </span>
                    <br className="break" />Based in <span className="span-text">India</span>
                </h1>
                {/* <NavLink to="/contact"> */}
                <a href={data.resumedownload} rel="noreferrer" target="_blank">
                    <Button text="View Resume" />
                </a>
                {/* </NavLink> */}
                <ul className="social flex">
                    <li><a href="https://github.com/Ankit628792/" target="_blank" rel="noreferrer"><GitHubIcon className="social__icon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/ankit628792/" target="_blank" rel="noreferrer"><LinkedInIcon className="social__icon" /></a></li>
                    {/* <li><a href="https://www.facebook.com/profile.php?id=100011619455942" target="_blank" rel="noreferrer"><FacebookIcon className="social__icon" /></a></li> */}
                    <li><a href="https://www.instagram.com/ankit_628792/" target="_blank" rel="noreferrer"><InstagramIcon className="social__icon" /></a></li>
                </ul>
            </div>
        </>
    )
}

export default Header
