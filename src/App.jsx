import './App.css';
import PortfolioProject from './components/PortfolioProject';
import AboutMe from './components/AboutMe';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of your first project. Add your own details here.',
      technologies: ['React', 'JavaScript', 'CSS'],
      imageUrl: 'https://via.placeholder.com/400x300?text=Project+1',
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Details about your second project. Highlight key features and technologies used.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/400x300?text=Project+2',
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Your third project showcase. Include any notable achievements or outcomes.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      imageUrl: 'https://via.placeholder.com/400x300?text=Project+3',
      link: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Another impressive project from your portfolio. Keep it concise and impactful.',
      technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
      imageUrl: 'https://via.placeholder.com/400x300?text=Project+4',
      link: '#',
    },
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Jeffery Tse</h1>
          <p>Developer | Foodie | Tech Enthusiast</p>
          <a href="#portfolio" className="cta-button">View My Work</a>
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
      <section className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for opportunities or collaborations</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="link-button">Email</a>
            <a href="#" className="link-button">LinkedIn</a>
            <a href="#" className="link-button">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
