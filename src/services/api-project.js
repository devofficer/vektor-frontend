
import axios from 'services/axios'

const getProjects = async (data) => {
  const params = {
    get_json: JSON.stringify(data)
  }
  return axios.get('/api/projects', { params });
};

const createProject = async (params) => {
  return await axios.post('/api/projects', params);
};

const updateProject = async (params) => {
  return await axios.put(`/api/projects`, params);
};

const deleteProject = async (params) => {
  return await axios.delete(`/api/projects`, { params });
};

const createProjectPhase = async (params) => {
  return await axios.post('/api/projects/nested', params);
};

const updateProjectPhase = async (params) => {
  return await axios.put(`/api/projects/nested`, params);
};

const deleteProjectPhase = async (params) => {
  return await axios.delete(`/api/projects/nested`, { params });
};

export {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  createProjectPhase,
  updateProjectPhase,
  deleteProjectPhase
};
