import './App.css';
import FeaturedProject from './components/FeaturedProject';
import ProjectListItem from './components/ProjectListItem';
import AboutMe from './components/AboutMe';
import websiteScreenshot from './assets/website_ss.png';
import platformerScreenshot from './assets/last_scroll_ss.png';
import selfDriveScreenshot from './assets/self_drive_ss.png';
import githubLogo from './assets/github_logo.png';
import linkedinLogo from './assets/linkedin_logo.png';

function App() {
  const projects = [
    {
      id: 1,
      title: 'GroGetter',
      description: 'Led a team of 4 building a grocery tracking web app with Flask, Python, MongoDB, and React, deployed on Heroku with pytest-driven CI.',
      technologies: ['Flask', 'Python', 'MongoDB', 'React', 'Heroku', 'pytest'],
      imageUrl: 'https://via.placeholder.com/400x300?text=GroGetter',
      featured: true,
      links: [
        { label: 'Backend', url: 'https://github.com/zhangdzh/SWE-F22' },
        { label: 'Frontend', url: 'https://github.com/zhangdzh/GroGetterFrontend' },
      ],
    },
    {
      id: 2,
      title: 'Personal Website',
      description: 'This site — built and continuously upgraded to showcase my projects and background with a custom, user-centric design.',
      technologies: ['React', 'JavaScript', 'CSS'],
      imageUrl: websiteScreenshot,
      links: [{ label: 'GitHub', url: 'https://github.com/tse-jeff/me' }],
    },
    {
      id: 3,
      title: 'Platformer',
      description: 'A 2D platformer game group project built in Unity, featuring original art and animations I created with GIMP.',
      technologies: ['Unity', 'C#', 'GIMP'],
      imageUrl: platformerScreenshot,
      links: [{ label: 'GitHub', url: 'https://github.com/tse-jeff/platformer' }],
    },
    {
      id: 4,
      title: 'NYU Self Drive',
      description: 'Headed development of a self-driving car simulation wrapped with the OpenAI Gym environment, supporting the team through remote competitions.',
      technologies: ['Python', 'OpenAI Gym', 'Machine Learning'],
      imageUrl: selfDriveScreenshot,
      links: [{ label: 'GitHub', url: 'https://github.com/Taaseen-Ali/OpenAI-Gym-Car-Race' }],
    },
  ];

  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Jeffery Tse</h1>
          <p>Developer | Foodie | Tech Enthusiast</p>
          <div className="hero-actions">
            <a href="#portfolio" className="cta-button">My Work</a>
            <a
              href={`${process.env.PUBLIC_URL}/Jeffery-Tse-Resume.pdf`}
              className="cta-button"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a href="#about" className="cta-button">About</a>
            <a href="#contact" className="cta-button">Contact</a>
          </div>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>My Work</h2>
          <FeaturedProject project={featuredProject} />
          <div className="project-list">
            {secondaryProjects.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutMe />

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for opportunities or collaborations</p>
          <div className="contact-links">
            <a href="mailto:jeff.tse@nyu.edu" className="icon-button" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jeffery-tse/"
              className="icon-button"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/tse-jeff/"
              className="icon-button"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src={githubLogo} alt="GitHub" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Jeffery Tse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
