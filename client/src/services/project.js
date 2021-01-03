import http from 'utils/http';
import config from 'config/config';

/**
 * Fetch all projects data.
 * 
 */
export const fetchAllProjects = async () => {
  const projects = await http.get(config.endpoints.project);

  if (!projects) {
    return null
  }

  return projects;
}

/**
 * Fetch project by id.
 * 
 */
export const fetchProjectById = async (id) => {
  const project = await http.get(`${config.endpoints.project}/${id}`);
console.log('ONE => ', project);
  if (!project) {
    return null
  }

  return project.data;
}

/**
 * Create a project.
 * 
 */
export const addProject = async (project) => {
  const response = await http.post(config.endpoints.project, project);

  return response.data;
}

/**
 * Delete a project.
 * 
 */
export const removeProject = async (id) => {
  const response = await http.delete(`${config.endpoints.project}/${id}`);

  return response.data;
}

/**
 * Updates a project.
 * 
 */
export const updateProject = async (project) => {
  const response = await http.put(`${config.endpoints.project}/${project._id}`, project);

  return response.data;
}
