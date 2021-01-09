import { getProjects } from './index.js'
const Project = function(name, description) {
    const allProjects = getProjects();
    allProjects.push({ name, description, lists: [] });
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
};