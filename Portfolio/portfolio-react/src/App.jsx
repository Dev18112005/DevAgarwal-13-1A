
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">Dev<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="intro">HELLO, I'M</p>
          <h1>Dev Agarwal</h1>
          <h2>MCA Student & Aspiring Developer</h2>

          <p className="description">
            I love coding, learning new technologies and creating
            websites and applications that solve real-world problems.
          </p>

          <a href="#projects" className="btn">
            View My Projects ↗
          </a>
        </div>

        <div className="hero-card">
          <div className="avatar">DA</div>
          <h2>Creative Mind.</h2>
          <h3>Technical Builder.</h3>
          <p>Java • React • Python</p>
        </div>
      </section>

      <section className="section" id="about">
        <p className="label">01 — ABOUT ME</p>
        <h2>Who am I?</h2>
        <p className="section-text">
          I am a computer applications graduate currently pursuing MCA
          at GLA University, Mathura. I enjoy software development,
          programming, web technologies and exploring new tools.
          My goal is to become a skilled software developer and build
          useful digital products.
        </p>
      </section>

      <section className="section" id="skills">
        <p className="label">02 — MY SKILLS</p>
        <h2>Technologies I work with</h2>

        <div className="skills">
          <div>Java</div>
          <div>Python</div>
          <div>C Programming</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Node.js</div>
          <div>MySQL</div>
          <div>MongoDB</div>
        </div>
      </section>

      <section className="section" id="projects">
        <p className="label">03 — MY PROJECTS</p>
        <h2>Projects I've worked on</h2>

        <div className="projects">
          <div className="project">
            <h3>ApnaCare</h3>
            <p>
              An Android healthcare application to explore care services
              and find healthcare assistance.
            </p>
            <span>Java · Android Studio · XML</span>
          </div>

          <div className="project">
            <h3>Student Attendance System</h3>
            <p>
              A student attendance management application with teacher
              and student functionality.
            </p>
            <span>Java · Firebase</span>
          </div>

          <div className="project">
            <h3>FinSight</h3>
            <p>
              A finance dashboard website for displaying data,
              financial insights and charts.
            </p>
            <span>PHP · MySQL · Chart.js</span>
          </div>

          <div className="project">
            <h3>E-Commerce Website</h3>
            <p>
              An online shopping application with products,
              backend APIs and database integration.
            </p>
            <span>Node.js · Express · MongoDB</span>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <p className="label">04 — CONTACT</p>
        <h2>Let's work together!</h2>
        <p className="section-text">
          I am open to internships, collaborations and exciting
          software development opportunities.
        </p>

        <a className="btn" href="mailto:your-email@example.com">
          Email Me ↗
        </a>
      </section>

      <footer>
        <h2 className="logo">Dev<span>.</span></h2>
        <p>© 2026 Dev Agarwal | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
