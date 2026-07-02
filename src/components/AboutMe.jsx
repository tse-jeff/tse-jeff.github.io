import './AboutMe.css';
import portrait from '../assets/pfp.jpg';

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-intro">
            <div className="about-portrait">
              <img src={portrait} alt="Jeffery Tse" />
            </div>
            <div className="about-intro-text">
              <p className="about-greeting">Hello! I'm Jeffery Tse.</p>
              <p>
                I'm a developer who loves exploring new things. I specialize in automated testing, developer infrastructure, and AI-driven workflows, and I thrive on fast-paced teams where data routing, automation, and great user experiences intersect.
              </p>
            </div>
          </div>

          <div className="about-cards">
            <div className="about-section">
              <h3>What I'm Doing Now</h3>
              <ul className="about-list">
                <li><strong>At Morgan Stanley:</strong> Architecting Python-based AI workflow orchestrators (agentic tools/MCP) and spearheading global internal frameworks to scale engineering velocity.</li>
                <li><strong>Past:</strong> Amazon SDE Intern (Alexa Music) & NYU Computer Science alum.</li>
                <li><strong>Side Quests:</strong> Deploying home servers and learning about LLMs to find local solutions.</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Beyond the Code</h3>
              <p>When I'm not architecting workflows, you can usually find me:</p>
              <ul className="about-list">
                <li><strong>On the Court:</strong> Playing volleyball with friends—it's the best way to stay sharp and social.</li>
                <li><strong>Creating:</strong> I still enjoy capturing life's best moments through video, a hobby that keeps my creative side active.</li>
              </ul>
              <p>Always down to connect with fellow builders!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
