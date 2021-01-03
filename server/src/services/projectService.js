import Project from '../models/Project';

/**
* Fetch all Projects.
*
* @returns {Promise}
*/
export async function fetch() {
  const result = await Project.find().sort({ createdAt: -1 })

  return result;
}

/**
 * Fetch a Project by Id.
 *
 * @param {String} id
 * 
 * @returns {Promise}
 */
export async function fetchById(id) {
  const result = await Project.findById(id);
console.log(result);
  return result;
}

/**
 * Add new Project.
 *
 * @param {Object} payload
 *
 * @returns {Promise}
 */
export async function create(payload) {
  const newProject = new Project(payload);
  const result = await newProject.save();

  return result;
}

/**
 * Update Project by id.
 *
 * @param {String} id
 * @param {Object} payload
 *
 * @returns {Promise}
 */
export async function updateById(id, payload) {
  const result = await Project.findByIdAndUpdate(id, payload);

  return result;
}

/**
 * Delete a Project.
 *
 * @param {String} id
 * @param {Object} payload
 *
 * @returns {Promise}
 */
export async function deleteById(id) {

  await Project.findByIdAndDelete(id);
}
