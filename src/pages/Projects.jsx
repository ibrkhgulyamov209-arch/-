import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    { id: 1, title: 'House in Forest', img: 'img/bg-img/3.jpg' },
    { id: 2, title: 'Modern Office', img: 'img/bg-img/4.jpg' },
    { id: 3, title: 'Apartment', img: 'img/bg-img/5.jpg' }
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <h2>Our Projects</h2>
      </div>
      <div className="projects-grid">
        {projectList.map(item => (
          <div className="project-item" key={item.id}>
            <img src={`https://artec-naqsh.vercel.app/${item.img}`} alt={item.title} />
            <div className="project-hover">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;