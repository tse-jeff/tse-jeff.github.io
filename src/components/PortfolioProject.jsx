import './PortfolioProject.css';

function PortfolioProject({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
        <div className="project-overlay">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {link.label}
            </a>
          ))}
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
