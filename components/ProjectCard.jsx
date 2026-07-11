function ProjectCard({ title, description, tech, link}){
    return(
        <article className ="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="tech-stack">{tech}</p>
            <a href ={link} target ="_blank" rel="noopener noreferrer">View on Github</a>
        </article>
    )
}
export default ProjectCard