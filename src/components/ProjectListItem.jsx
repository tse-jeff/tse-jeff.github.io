import './ProjectListItem.css';

function ProjectListItem({ project }) {
  return (
    <div className="project-list-item">
      <div className="project-list-thumb">
        <img src={project.imageUrl} alt={project.title} />
      </div>
      <div className="project-list-content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-list-links">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="project-list-link"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectListItem;
