import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xvzbrpaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="section-subtitle">
          Let's work together on your next project.
        </p>
      </div>

      <div className="contact-container glass">
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div>
              <h3>Email</h3>
              <a
                href="mailto:nandakumarasokan@gmail.com"
                className="contact-link"
              >
                nandakumarasokan@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/nandakumar-a-a-b86789147/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/nandakumar-a-a-b86789147
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <FaGithub />
            </div>
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/NandakumarAA"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/NandakumarAA
              </a>
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {submitted && (
            <div className="success-message">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
