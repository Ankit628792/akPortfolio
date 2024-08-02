import React from 'react'

function Skills({ skills }) {
    return (
        <div className="skills">
            <h2 className="small-h">Skill set</h2>
            <h1 className="">Expertise in these skills</h1>
            <p>{skills.desc}</p>
            <div className="skill">
                {
                    skills.images.map((image, i) => (
                        <div key={i} className="img__container">
                            <img src={image} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills
