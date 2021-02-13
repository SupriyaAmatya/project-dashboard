import React from 'react'

const ProjectStatus = ({ label, color }) => {
  return (
    <div className="project-info__row">
      <div className="label">Project Status</div>
      <div className={`status-indicator status-indicator--${color}`}>
        <span className="status-indicator__bulb"></span>
        <span className="status-indicator__label">{label}</span>
      </div>
    </div>
  );
};

export default ProjectStatus;
