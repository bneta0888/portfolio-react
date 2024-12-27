import React from "react";
import "./contact.css";
import Nav from "../Nav/Nav";
import Foot from "../foot/Foot";

const Contact = () => {
  return (
    <>
    <Nav/>
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out using the form below:</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <Foot/>

    </>
  );
};

export default Contact;
