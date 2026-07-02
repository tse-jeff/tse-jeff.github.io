import './App.css';
import PortfolioProject from './components/PortfolioProject';
import AboutMe from './components/AboutMe';
import websiteScreenshot from './assets/website_ss.png';
import platformerScreenshot from './assets/last_scroll_ss.png';
import selfDriveScreenshot from './assets/self_drive_ss.png';

function App() {
  const projects = [
    {
      id: 1,
      title: 'GroGetter',
      description: 'Led a team of 4 building a grocery tracking web app with Flask, Python, MongoDB, and React, deployed on Heroku with pytest-driven CI.',
      technologies: ['Flask', 'Python', 'MongoDB', 'React', 'Heroku', 'pytest'],
      imageUrl: 'https://via.placeholder.com/400x300?text=GroGetter',
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
          <div className="projects-grid">
            {projects.map((project) => (
              <PortfolioProject key={project.id} project={project} />
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
            <a href="mailto:jeff.tse@nyu.edu" className="link-button">Email</a>
            <a
              href="https://www.linkedin.com/in/jeffery-tse/"
              className="link-button"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tse-jeff/"
              className="link-button"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
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
