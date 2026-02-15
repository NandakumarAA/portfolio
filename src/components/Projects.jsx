import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart, payment gateway, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB"],
            image: "https://via.placeholder.com/400x250/1a1a2e/00f3ff?text=Project+1",
            links: { github: "#", demo: "#" }
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates.",
            tech: ["Vue.js", "Firebase", "Tailwind"],
            image: "https://via.placeholder.com/400x250/1a1a2e/bc13fe?text=Project+2",
            links: { github: "#", demo: "#" }
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Modern, responsive portfolio with dark mode and glassmorphism.",
            tech: ["React", "CSS3", "Vite"],
            image: "https://via.placeholder.com/400x250/1a1a2e/27c93f?text=Project+3",
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2 className="section-title gradient-text">Featured Projects</h2>
                <p className="section-subtitle">A selection of my recent work.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card glass">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-links">
                                <a href={project.links.github} className="icon-link"><FaGithub /></a>
                                <a href={project.links.demo} className="icon-link"><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, index) => (
                                    <span key={index} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
