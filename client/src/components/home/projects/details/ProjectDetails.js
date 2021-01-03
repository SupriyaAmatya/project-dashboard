import { statusToColorMap } from 'maps/statusToColor';
import React, { useState, useEffect } from 'react';

import * as projectService from 'services/project';
import * as routes from 'constants/routes';
import history from 'utils/history';
import ProjectStatus from '../components/ProjectStatus';
import ProjectTech from '../components/ProjectTech';
import ProjectInfoMain from './ProjectInfoMain';
import { dateFormat } from 'utils/dateFormat';

const ProjectDetails = (props) => {
  const { id } = props.match.params;

  const [projectDetails, setProjectDeatils] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchProjectById = async (id) => {
    const data = await projectService.fetchProjectById(id);

    if (data) {
      setProjectDeatils(data);
      setLoading(false);
    }
  }

  const handleDelete = async () => {
    try {
      await projectService.removeProject(id);

      console.log('deteled');
      history.push(routes.PROJECTS);

    } catch (err) {
      console.log(err);
    }
  }

  const redirectToEditPage = () => {
    history.push(`${routes.PROJECTS}/${id}/edit`);
  }

  useEffect(() => {
    fetchProjectById(id);
  }, [id]);

  const { name, description, businessGoal, status, category, techStacks, startDate, endDate } = projectDetails;

  const statusLowerCase = status && status.toLowerCase();

  return (
    <div className="cotent-wrap">
      {!isLoading && projectDetails ?
        <div className="container">
          <div className="title-bar mb-5x"></div>
          <div className="card card--elevated">
            <div className="title-bar__contents">
              <div className="title-bar__left">
                <h4 className="title-bar__title">{name}</h4>
              </div>
              <div className="title-bar__right">
                <button className="btn btn--blue mr-2x" onClick={redirectToEditPage}>Edit</button>
                <button className="btn btn--red" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
          <div className="project-details card card--elevated mt-4x">
            <div className="project-details__left border-right">
              <div className="text-uppercase small text-bold mb-6x">project information</div>
              <ProjectStatus label={status} color={statusToColorMap[statusLowerCase]} />
              <div className="project-info__row">
                <div className="label">Category</div>
                <div className="data">{category}</div>
              </div>
              <ProjectTech data={techStacks} />
              <div className="project-info__row">
                <div className="label">Start Date</div>
                <div className="data">{startDate ? dateFormat(startDate) : '-'}</div>
              </div>
              <div className="project-info__row">
                <div className="label">End Date</div>
                <div className="data">{endDate ? dateFormat(endDate) : '-'}</div>
              </div>
            </div>
            <div className="project-details__right">
              <ProjectInfoMain description={description} businessGoal={businessGoal} />
            </div>
          </div>
        </div>
        : <p>Loading...</p>
      }
    </div>
  );
};

export default ProjectDetails;
