import React, { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from "../App";

function Project({ project, flex }) {
    const {state, dispatch} = useContext(ThemeContext);
    return (
        <div className={ flex ? 'flex project' : ' flex-reverse project'}>
            <div className="content">
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
                <p className="tech flex">
                    <strong>Stack:&nbsp;</strong>
                    {project.keySkills.map((skill, i) => (
                        <>{i !== 0 && `,`} {skill}</>
                    ))}
                </p>
                   <a href={project.url} target="_blank" rel="noreferrer"> <Button text="View Project" /> </a>
            </div>
            <div className="imgBx">
                <img src={project.image} style={{filter: `${state ? 'invert(1) saturate(1) hue-rotate(-100deg)' : 'none'}`}} alt="" />
            </div>
        </div>
    )
}

export default Project
