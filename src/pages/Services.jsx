import React from 'react';
import '../styles/Services.css';

const Services = () => (
  <div className="services-container">
    <div className="service-card">
      <div className="icon">01.</div>
      <h3>Architecture</h3>
      <p>Creating spaces that inspire.</p>
    </div>
    <div className="service-card active">
      <div className="icon">02.</div>
      <h3>Interior Design</h3>
      <p>Modern and cozy interiors.</p>
    </div>
  </div>
);

export default Services;