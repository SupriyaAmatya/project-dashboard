import React, { useState } from 'react';
import ProjectForm from '../components/ProjectForm';

const ProjectCreate = () => {
  const initialState = {
    name: '',
    description: '',
    businessGoal: '',
    status: '',
    category: '',
    startDate: '',
    endDate: '',
    techStacks:[],
  }
  const [data, setData] = useState(initialState)
  return (
    <div className="cotent-wrap">
      <div className="container">
        <div className="title-bar mb-5x"></div>
        <div className="card card--elevated">
          <div className="title-bar__contents">
            <div className="title-bar__left">
              <h4 className="title-bar__title">Add Project</h4>
            </div>
          </div>
          <ProjectForm data={data} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
