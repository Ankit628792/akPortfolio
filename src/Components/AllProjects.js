import React from 'react'
import Project from './Project'

function AllProjects({ projects }) {
    return (
        <>
            <div className="all__projects__container">

                <h1 className="small-h text-center">My Recent Projects</h1>
                <div className="all__projects">
                    {
                        projects.map((project, i) => (
                            <Project key={i} project={project} flex={i % 2 === 0} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllProjects
