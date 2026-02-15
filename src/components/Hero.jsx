import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h3 className="hero-subtitle">Hello, I'm</h3>
                <h1 className="hero-title gradient-text">Nandakumar A A</h1>
                <h2 className="hero-role">Full Stack Developer</h2>
                <p className="hero-description">
                    I build exceptional digital experiences that are fast, accessible, and visually stunning.
                    Passionate about creating modern web applications.
                </p>

                <div className="hero-cta">
                    <a href="/resume.pdf" download className="btn-primary">
                        Download Resume
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
                    <div className="card-body">
                        <pre>
                            <code>
                                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                <span className="key">name</span>: <span className="string">"Nandakumar"</span>,
                                <span className="key">role</span>: <span className="string">"Full Stack Dev"</span>,
                                <span className="key">skills</span>: [<span className="string">"React"</span>, <span className="string">"Node"</span>, <span className="string">"Design"</span>]
                                {'}'};
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="glow-circle"></div>
            </div>
        </section>
    );
};

export default Hero;
