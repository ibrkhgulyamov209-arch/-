import React from 'react';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => (
  <div className="details-container">
    <div className="details-text">
      <h2>Project details</h2>
      <p>Architecture is both the process and the product of planning, designing, and constructing buildings or other structures.</p>
      <div className="spec-list">
        <div><span>Client:</span> Artec Group</div>
        <div><span>Date:</span> 2026</div>
      </div>
    </div>
    <div className="details-image">
      <img src="https://artec-naqsh.vercel.app/img/bg-img/14.jpg" alt="Detail" />
    </div>
  </div>
);

export default ProjectDetails;