import { getProjects } from './index.js'
import { ProjectUI } from './projectUI.js'
const Project = function(name, description) {
    const allProjects = getProjects();
    allProjects.push({ name, description, lists: [] });
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    return { name, description }
};

const addProject = event => {
    event.preventDefault();
    const projName = document.querySelector('.new-proj-name').value;
    const projDesc = document.querySelector('.new-proj-desc').value;
    const newProject = Project(projName, projDesc);
    ProjectUI.addNewProjectToUI(newProject);
    document.querySelector('.new-proj-close').click();
}
export { addProject }