import React from 'react'
import Button from './Button'
function Project({ project, flex }) {
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
                <img src={project.image} alt="" />
            </div>
        </div>
    )
}

export default Project
