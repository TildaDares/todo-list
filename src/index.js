import hamburgerMenu from './hamburger.js'
import { ProjectUI } from './projectUI.js'
hamburgerMenu();
ProjectUI.addProjectListName();

function getProjects() {
    return JSON.parse(localStorage.getItem("allProjects") || "[]");
}
export { getProjects }