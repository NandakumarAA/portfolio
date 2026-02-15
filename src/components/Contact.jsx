import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2 className="section-title gradient-text">Get In Touch</h2>
                <p className="section-subtitle">Let's work together on your next project.</p>
            </div>

            <div className="contact-container glass">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="icon-box">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>nandakumar@example.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon-box">
                            <FaLinkedin />
                        </div>
                        <div>
                            <h3>LinkedIn</h3>
                            <p>linkedin.com/in/nandakumar</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon-box">
                            <FaGithub />
                        </div>
                        <div>
                            <h3>GitHub</h3>
                            <p>github.com/nandakumar</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon-box">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3>Location</h3>
                            <p>India</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
