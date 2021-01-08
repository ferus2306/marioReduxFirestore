import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

// destructoring in props
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
        {/* if we have project then do the following */}
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList