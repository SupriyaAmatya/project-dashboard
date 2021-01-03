import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import history from 'utils/history';
import * as routes from 'constants/routes';
import Table from 'components/common/table';
import * as projectService from 'services/project';
import { dateFormat } from 'utils/dateFormat';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const columns = [
    {
      Header: 'SN',
      maxWidth: 50,
      Cell: props => {
        return <span>{props.row.index + 1}.</span>;
      },
    },
    {
      Header: 'Project Name',
      accessor: 'name',
    },
    {
      Header: 'Start Date',
      accessor: 'startDate',
      Cell: props => <span>{props.value ? dateFormat(props.value) : '-'}</span>,
    },
    {
      Header: 'End Date',
      accessor: 'endDate',
      Cell: props => <span>{props.value ? dateFormat(props.value) : '-'}</span>,
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
  ];

  const redirectToDetailsPage = id => {
    history.push(`${routes.PROJECTS}/${id}`);
  };

  const fetchProjects = async () => {
    const data = await projectService.fetchAllProjects();
    setProjects(data.data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="cotent-wrap">
      <div className="container">
        <div className="title-bar mb-5x"></div>
        <div className="card card--elevated">
          <div className="title-bar__contents">
            <div className="title-bar__left">
              <h4 className="title-bar__title">Project List</h4>
            </div>
            <div className="title-bar__right">
              <Link to={routes.PROJECTS_CREATE} className="btn btn--blue">
                Add Project
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="full-scope-card__content mt-5x">
          <Table columns={columns} data={projects} onRowClick={redirectToDetailsPage} />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
