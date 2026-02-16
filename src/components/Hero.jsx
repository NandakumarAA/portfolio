import React from "react";
import "../styles/Hero.css";
import profileImg from "../assets/myprofile.jpg";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div class="row">
          <div class="col-11 col-sm-8 col-md-6 col-lg-6 col-xl-4 vcard-info">
            <img src={profileImg} alt="Profile" className="img-fluid" />
          </div>
        </div>
        <h3 className="hero-subtitle">Hello, I'm</h3>
        <h1 className="hero-title gradient-text">Nandakumar A A</h1>
        <h2 className="hero-role">Full Stack Developer</h2>
        <p className="fw-semibold hero-description mt-3 text-secondary">
          Welcome to my portfolio — a space where I share
          <span className="text-light fw-bold"> technical insights</span>,
          <span className="text-light fw-bold"> ideas</span>, and
          <span className="text-light fw-bold"> real-world projects</span>
          <span> as I learn and build in software development.</span>
        </p>

        <div className="hero-cta">
          <a
            href="https://www.linkedin.com/in/nandakumar-a-a-b86789147/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaLinkedin className="me-2" />
            LinkedIn Profile
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card glass">
          <div className="card-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="card-body font-monospace fs-6">
            <h5 className="fw-bold mb-2">Software Engineer — ASP.NET & C#</h5>

            <p className="mb-3">
              Building scalable, high-performance web applications with modern
              Microsoft technologies and clean architecture principles.
            </p>

            <div className="mb-3">
              {/* Backend */}
              <h6 className="fw-bold mt-2">Backend</h6>
              <div className="mb-2">
                <span className="badge bg-primary me-2 mb-2">ASP.NET MVC</span>
                <span className="badge bg-primary me-2 mb-2">
                  ASP.NET Core API
                </span>
                <span className="badge bg-primary me-2 mb-2">Web API</span>
                <span className="badge bg-primary me-2 mb-2">
                  Entity Framework
                </span>
                <span className="badge bg-primary me-2 mb-2">LINQ</span>
                <span className="badge bg-primary me-2 mb-2">MS SQL</span>
              </div>

              {/* Frontend */}
              <h6 className="fw-bold mt-3">Frontend</h6>
              <div className="mb-2">
                <span className="badge bg-success me-2 mb-2">React</span>
                <span className="badge bg-success me-2 mb-2">JavaScript</span>
                <span className="badge bg-success me-2 mb-2">HTML</span>
                <span className="badge bg-success me-2 mb-2">CSS</span>
                <span className="badge bg-success me-2 mb-2">Bootstrap</span>
                <span className="badge bg-success me-2 mb-2">jQuery</span>
                <span className="badge bg-success me-2 mb-2">AJAX</span>
              </div>

              {/* Tools */}
              <h6 className="fw-bold mt-3">Tools & Platforms</h6>
              <div>
                <span className="badge bg-danger me-2 mb-2">Git</span>
                <span className="badge bg-danger me-2 mb-2">GitHub</span>
                <span className="badge bg-danger me-2 mb-2">GitLab</span>
                <span className="badge bg-danger me-2 mb-2">Jira</span>
                <span className="badge bg-danger me-2 mb-2">VS Code</span>
                <span className="badge bg-danger me-2 mb-2">Visual Studio</span>
              </div>
            </div>

            <p className="mb-0">
              Collaborative developer with strong attention to detail and a
              passion for continuous learning. Open to opportunities where I can
              deliver impactful solutions while growing technically and
              professionally.
            </p>
          </div>
        </div>
        <div className="glow-circle"></div>
      </div>
    </section>
  );
};

export default Hero;
