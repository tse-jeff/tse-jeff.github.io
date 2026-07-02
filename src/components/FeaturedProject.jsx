import './FeaturedProject.css';

function FeaturedProject({ project }) {
  return (
    <div className="featured-project">
      <div className="featured-project-image">
        <img src={project.imageUrl} alt={project.title} />
      </div>
      <div className="featured-project-content">
        <h3>{project.title}</h3>
        <p className="featured-project-description">{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="featured-project-links">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="featured-project-link"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
