import { statusToColorMap } from 'maps/statusToColor';
import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'vyaguta-icons/fi';

import * as projectService from 'services/project';
import * as routes from 'constants/routes';
import history from 'utils/history';
import * as toast from 'utils/toast';
import ProjectStatus from '../components/ProjectStatus';
import ProjectTech from '../components/ProjectTech';
import ProjectInfoMain from './ProjectInfoMain';
import { dateFormat } from 'utils/dateFormat';
import Alert from 'components/common/alert';
import Loader from 'components/common/loader/Loader';

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

  const handleDelete = async (e) => {
    e.preventDefault();
    Alert.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: async () => {
        try {
          await projectService.removeProject(id);

          console.log('deteled');
          toast.success({
            title: 'Deleted!',
            message: 'Project removed successfully.'
          });
          history.push(routes.PROJECTS);

        } catch (err) {
          console.log(err);
        }
      }
    })
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
          <div className="card card--elevated mt-5x">
            <div className="title-bar__contents">
              <div className="title-bar__left">
                <button className="btn btn--with-icon btn--outlined-grey mr-4x" onClick={() => history.goBack()}>
                  <FiArrowLeft className="btn__icon btn__icon--left" /> Back
                </button>
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
        : <Loader />
      }
    </div>
  );
};

export default ProjectDetails;
