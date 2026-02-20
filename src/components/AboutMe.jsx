import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-intro">
            <p className="about-greeting">Hello! I'm Jeffery Tse.</p>
            <p>
              I am an Integration Developer II at Morgan Stanley, currently based in Montreal. My journey in tech recently took a literal turn when I relocated from New York to Quebec to join the Trade Risk Control team. Navigating a new city where French is the primary language has been an incredible growth experience, paralleling the way I approach complex software systems: with curiosity, adaptability, and a drive to bridge gaps.
            </p>
          </div>

          <div className="about-section">
            <h3>What I'm Doing Now</h3>
            <p>
              At Morgan Stanley, I focus on the reliability and architecture of critical trade risk applications. My day-to-day involves:
            </p>
            <ul className="about-list">
              <li><strong>Automating Excellence:</strong> Building Python-based test suites to pave the way for seamless CI/CD.</li>
              <li><strong>System Optimization:</strong> Managing deployments and refining inter-process communication to ensure high-performance production environments.</li>
              <li><strong>Collaborative Strategy:</strong> Working across functions to ensure our end-to-end testing is airtight.</li>
            </ul>
            <p>
              Beyond my core role, I remain deeply invested in the tech community as a Product Marketing Analyst and Instructor at 355Code. Whether I'm teaching JavaScript or advising on business expansion, I love the challenge of making technical concepts accessible and driving strategic growth.
            </p>
          </div>

          <div className="about-section">
            <h3>Beyond the Code</h3>
            <p>When I'm not optimizing deployments, you can usually find me:</p>
            <ul className="about-list">
              <li><strong>On the Court:</strong> Playing volleyball with friends—it's the best way to stay sharp and social.</li>
              <li><strong>Exploring Montreal:</strong> I'm currently on a mission to find the best spots in the city while soaking in the local culture (and practicing my French!).</li>
              <li><strong>Creating:</strong> I still enjoy capturing life's best moments through video, a hobby that keeps my creative side active.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
