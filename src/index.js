import hamburgerMenu from './hamburger.js'
import { ProjectUI } from './projectUI.js'
import { addProject } from './project.js'

function getProjects() {
    return JSON.parse(localStorage.getItem("allProjects") || "[]");
}

function init() {
    hamburgerMenu();
    addListeners();
    ProjectUI.addAllProjectsToUI();
    let hamitems = document.querySelector('.hamitems');
    let firstProjectListTag = hamitems.firstElementChild;
    if (firstProjectListTag) { firstProjectListTag.firstElementChild.click() }; //goes to the first project page on document load
}

function addListeners() {
    document.querySelector('#new-proj-form').addEventListener('submit', addProject)
}
init();
export { getProjects }