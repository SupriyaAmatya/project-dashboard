import React from 'react'

const ProjectInfoMain = ({description, businessGoal}) => {
  return (
    <>
      <div className="project-info mb-10x">
        <h3 className="title">Project Description</h3>
        <div className="body2">{description}</div>
      </div>
      <div className="project-info mb-10x">
        <h3 className="title">Business Goals</h3>
        <div className="body2">{businessGoal}</div>
      </div>
    </>
  );
};

export default ProjectInfoMain;
