import './PortfolioProject.css';

function PortfolioProject({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
        <div className="project-overlay">
          <a href={project.link} className="project-link">View Project</a>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioProject;
