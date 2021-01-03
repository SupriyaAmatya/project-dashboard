import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from 'constants/routes';

import ProjectList from './list';
import ProjectEdit from './edit';
import ProjectCreate from './create';
import ProjectDetails from './details/ProjectDetails';

const ProjectsRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.PROJECTS} component={ProjectList} />
      <Route path={routes.PROJECTS_CREATE} component={ProjectCreate} />
      <Route path={routes.PROJECTS_EDIT} component={ProjectEdit} />
      <Route path={routes.PROJECT_DETAILS} component={ProjectDetails} />
    </Switch>
  )
}

export default ProjectsRouter;
