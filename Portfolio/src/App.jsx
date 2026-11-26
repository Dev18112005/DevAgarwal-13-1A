
import React from "react";
import "./App.css";

const skills = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "ApnaCare",
    category: "Healthcare · Android Application",
    description:
      "A healthcare assistance app designed to help users discover care providers, search services, explore categories, and connect with healthcare support.",
    tech: ["Java", "XML", "Android Studio"],
  },
  {
    number: "02",
    title: "Student Attendance System",
    category: "Education · Mobile Application",
    description:
      "An attendance management application with separate teacher and student roles, attendance records, and attendance statistics.",
    tech: ["Java", "Firebase", "Android"],
  },
  {
    number: "03",
    title: "FinSight",
    category: "Finance · Web Application",
    description:
      "A finance dashboard concept for presenting financial information, tracking data, and visualizing insights through charts.",
    tech: ["PHP", "MySQL", "Bootstrap", "Chart.js"],
  },
  {
    number: "04",
    title: "E-Commerce Application",
    category: "Web Development · Full Stack",
    description:
      "A full-stack e-commerce application with product listings, backend APIs, database integration, and shopping functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Dev<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-contact">
            Let's Talk ↗
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero section" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="green-dot"></span>
            Open to opportunities
          </div>

          <p className="eyebrow">HELLO, I'M A DEVELOPER</p>

          <h1>
            Dev
            <br />
            <span className="gradient-text">Agarwal.</span>
          </h1>

          <h2 className="hero-subtitle">
            MCA Student & Aspiring
            <br />
            Software Developer
          </h2>

          <p className="hero-description">
            I build digital experiences, explore new technologies, and turn
            creative ideas into practical software solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <span>↗</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
        </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="profile-card">
            <div className="card-top">
              <span>PORTFOLIO / 2026</span>
              <span>✳</span>
            </div>

            <div className="profile-avatar">
              <div className="avatar-glow"></div>
              <div className="avatar-text">DA</div>
            </div>

            <h3>Creative Mind.</h3>
            <h3 className="muted-heading">Technical Builder.</h3>

            <div className="profile-divider"></div>

            <div className="profile-info">
              <div>
                <small>FOCUS</small>
                <p>Software Development</p>
              </div>
              <div>
                <small>LOCATION</small>
                <p>India 🇮🇳</p>
              </div>
            </div>
          </div>

          <div className="floating-tag tag-one">{"< React />"}</div>
          <div className="floating-tag tag-two">Java ☕</div>
          <div className="floating-tag tag-three">Building ideas ✦</div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section about-section" id="about">
        <div className="section-label">01 — ABOUT ME</div>

        <div className="about-content">
          <h2 className="section-heading">
            Curious by nature.
            <br />
            <span className="gradient-text">Developer by passion.</span>
          </h2>

          <p className="about-text">
            I'm a computer applications student with a strong interest in
            software development, web technologies, and problem solving.
            Having completed my BCA and currently pursuing MCA, I'm
            continuously expanding my technical knowledge and building
            projects that help turn concepts into real-world applications.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>2<span>+</span></h3>
              <p>Degrees / Programs</p>
            </div>
            <div className="stat">
              <h3>4<span>+</span></h3>
              <p>Projects Built</p>
            </div>
            <div className="stat">
              <h3>12<span>+</span></h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-label">02 — TECH STACK</div>

        <h2 className="section-heading">
          Tools I use to
          <br />
          <span className="gradient-text">bring ideas to life.</span>
        </h2>

        <p className="section-description">
          Technologies I'm learning, exploring, and using to build applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{skill}</h3>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-label">03 — SELECTED PROJECTS</div>

        <h2 className="section-heading">
          Things I've
          <br />
          <span className="gradient-text">been building.</span>
        </h2>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-details">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-tags">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-icon">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <div className="section-label">04 — EDUCATION</div>

        <h2 className="section-heading">
          My academic
          <br />
          <span className="gradient-text">journey.</span>
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2026 — PRESENT</div>
            <h3>Master of Computer Applications (MCA)</h3>
            <p>GLA University, Mathura</p>
            <span className="timeline-tag">Postgraduate</span>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">COMPLETED</div>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>GGSIPU · Don Bosco Institute of Technology</p>
            <span className="timeline-tag">Undergraduate</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-label">05 — GET IN TOUCH</div>

        <h2 className="contact-heading">
          Have an idea?
          <br />
          <span className="gradient-text">Let's build it.</span>
        </h2>

        <p className="contact-description">
          I'm open to internships, collaborations, learning opportunities,
          and exciting development projects.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn btn-primary contact-button"
        >
          Say Hello <span>↗</span>
        </a>

        <div className="contact-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          Dev<span>.</span>
        </a>
        <p>Designed & developed with React. © 2026</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
