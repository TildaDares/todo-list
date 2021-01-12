import hamburgerMenu from './hamburger.js'
import { ProjectUI } from './projectUI.js'
import { addProject, projectEditForm, editProject } from './project.js'
import { addTodo } from './todo.js'

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
    document.querySelector('#new-proj-form').addEventListener('submit', addProject);
    document.querySelector('#edit-proj-form').addEventListener('submit', editProject);
    document.querySelector('#new-task-form').addEventListener('submit', addTodo);
    $('#editProj').on('shown.bs.modal', projectEditForm);
}
init();
export { getProjects }