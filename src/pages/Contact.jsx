import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-wrapper">
    <div className="contact-form-side">
      <h2>Get in touch</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
);

export default Contact;