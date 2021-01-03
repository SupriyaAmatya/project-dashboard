import React from 'react'

const ProjectTech = ({ data }) => {

  return (
    <div className="project-info__row">
      <div className="label">Tech Stacks</div>
      {data && data.map((data, index) => (<span key={index} className="tech-pill">{data}</span>))}
    </div>
  );
};

export default ProjectTech;
