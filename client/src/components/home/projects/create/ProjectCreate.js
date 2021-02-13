import React from 'react';
import { FiArrowLeft } from 'vyaguta-icons/fi';

import history from 'utils/history';
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
    techStacks: [],
  }

  return (
    <div className="cotent-wrap">
      <div className="container">
        <div className="title-bar mb-5x"></div>
        <div className="card card--elevated">
          <div className="title-bar__contents border-bottom">
            <button className="btn btn--with-icon btn--outlined-grey mr-4x" onClick={() => history.goBack()}>
              <FiArrowLeft className="btn__icon btn__icon--left" /> Back
            </button>
            <div className="title-bar__left">
              <h4 className="title-bar__title">Add Project</h4>
            </div>
          </div>
          <ProjectForm data={initialState} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
