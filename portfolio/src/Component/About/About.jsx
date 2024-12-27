import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./About.css"; // CSS file for styling

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="about-container">
      <Nav />
      <div className="about-content">
        <div className="about-text">
          <h1 style={{textAlign:"center"}}>About Me</h1>
          <p>
            I am a dedicated and hardworking BCSIT undergraduate with a solid IT background and expertise in digital marketing. I have experience in social media management, content creation, and implementing effective marketing strategies. With a proven track record as a Social Media Marketer and Digital Marketing Officer, I am skilled at using current trends to boost brand visibility and engagement. I am committed to applying innovative ideas to achieve growth and support the success of dynamic organizations.
          </p>
          <div className="about-sections">
            {/* Skills Section */}
            <div className="section">
              <h2
                onClick={() => toggleSection("skills")}
                className={`clickable ${activeSection === "skills" ? "active" : ""}`}
              >
                Skills
              </h2>
              <ul className={activeSection === "skills" ? "show" : "hidden"}>
                <li>Social Media Management</li>
                <li>Content Creation</li>
                <li>Digital Marketing</li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="section">
              <h2
                onClick={() => toggleSection("experience")}
                className={`clickable ${activeSection === "experience" ? "active" : ""}`}
              >
                Experience
              </h2>
              <ul className={activeSection === "experience" ? "show" : "hidden"}>
                <li>Social Media Marketer at XYZ Company</li>
                <li>Digital Marketing Officer at ABC Ltd.</li>
              </ul>
            </div>

            {/* Education Section */}
            <div className="section">
              <h2
                onClick={() => toggleSection("education")}
                className={`clickable ${activeSection === "education" ? "active" : ""}`}
              >
                Education
              </h2>
              <ul className={activeSection === "education" ? "show" : "hidden"}>
                <li>
                  2023 - 2027 (Estimated): Bachelor in Computer Science and Information Technology
                  (BCSIT) from Medhavi College
                </li>
                <li>2021 - 2023: Intermediate Level Education from Adarsha Secondary School</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
