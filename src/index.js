import hamburgerMenu from './hamburger.js'
import { ProjectUI } from './projectUI.js'

function getProjects() {
    return JSON.parse(localStorage.getItem("allProjects") || "[]");
}

function init() {
    hamburgerMenu();
    ProjectUI.addAllProjectsToUI();
    let hamitems = document.querySelector('.hamitems');
    hamitems.firstElementChild.firstElementChild.click(); //goes to the first project page on document load
}
init();
export { getProjects }