import './AboutMe.css';
import portrait from '../assets/pfp.jpg';
import { useContentSlot } from '../hooks/useContentSlot';
import { renderMarkdown } from '../utils/renderMarkdown';

const FALLBACK_INTRO =
  "I'm a developer who loves exploring new things. I specialize in automated testing, developer infrastructure, and AI-driven workflows, and I thrive on fast-paced teams where data routing, automation, and great user experiences intersect.";

const FALLBACK_NOW = `- **At Morgan Stanley:** Architecting Python-based AI workflow orchestrators (agentic tools/MCP) and spearheading global internal frameworks to scale engineering velocity.
- **Past:** Amazon SDE Intern (Alexa Music) & NYU Computer Science alum.
- **Side Quests:** Deploying home servers and learning about LLMs to find local solutions.`;

const FALLBACK_BEYOND = `When I'm not architecting workflows, you can usually find me:

- **On the Court:** Playing volleyball with friends—it's the best way to stay sharp and social.
- **Creating:** I still enjoy capturing life's best moments through video, a hobby that keeps my creative side active.

Always down to connect with fellow builders!`;

function AboutMe() {
  const intro = useContentSlot('about-intro', FALLBACK_INTRO);
  const now = useContentSlot('about-now', FALLBACK_NOW);
  const beyond = useContentSlot('about-beyond', FALLBACK_BEYOND);

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
              <p>{intro}</p>
            </div>
          </div>

          <div className="about-cards">
            <div className="about-section">
              <h3>What I'm Doing Now</h3>
              <div dangerouslySetInnerHTML={{ __html: renderMarkdown(now) }} />
            </div>

            <div className="about-section">
              <h3>Beyond the Code</h3>
              <div dangerouslySetInnerHTML={{ __html: renderMarkdown(beyond) }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
