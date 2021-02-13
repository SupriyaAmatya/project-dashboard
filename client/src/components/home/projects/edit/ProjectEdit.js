import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'vyaguta-icons/fi';

import history from 'utils/history';
import * as projectService from 'services/project';
import ProjectForm from '../components/ProjectForm';

const ProjectEdit = (props) => {
  const { id } = props.match.params
  const initialState = {
    name: '',
    description: '',
    businessGoal: '',
    status: '',
    category: '',
    startDate: '',
    endDate: '',
    techStacks: [],
    status_value: {} || '',
    category_value: {} || '',
    techStack_value: [],
  }
  const [data, setData] = useState(initialState);

  const fetchProjectById = async (id) => {
    try {
      let data = await projectService.fetchProjectById(id);
      if (data.status) {
        data.status_value = {
          label: data.status,
          value: data.status,
        }
      }
      if (data.category) {
        data.category_value = {
          label: data.category,
          value: data.category,
        }
      }
      if (data.techStacks) {
        data.techStack_value = data.techStacks.map(tech => {
          let properties = {
            value: tech,
            label: tech,
          }
          return properties
        })
      }

      setData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProjectById(id);
  }, [id])

  return (
    <div className="cotent-wrap">
      <div className="container">
        <div className="title-bar mb-5x"></div>
        <div className="card card--elevated border-bottom">
          <div className="title-bar__contents border-bottom">
            <button className="btn btn--with-icon btn--outlined-grey mr-4x" onClick={() => history.goBack()}>
              <FiArrowLeft className="btn__icon btn__icon--left" /> Back
            </button>
            <div className="title-bar__left">
              <h4 className="title-bar__title">Edit Project</h4>
            </div>
          </div>
          <ProjectForm data={data} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectEdit;
