import { getProjects } from './index.js'
const ProjectUI = (() => {
    let allProjects = getProjects();
    const hamitems = document.querySelector('.hamitems');
    let activeProject;
    let activeProjectElem;
    let projectIndex;
    const addAllProjectsToUI = () => {
        for (let i = 0; i < allProjects.length; i++) {
            createProjectList(allProjects[i]);
        }
    }

    const addNewProjectToUI = project => {
        allProjects = getProjects();
        let projectBtn = createProjectList(project);
        projectBtn.click();
    }

    const createProjectList = project => {
        if (hamitems.firstElementChild) { attachHorizontalRule() };
        let projectLi = document.createElement('li');
        let projectBtn = document.createElement('button');
        projectLi.appendChild(projectBtn);
        hamitems.append(projectLi);
        projectBtn.className = "remove-btn";
        projectBtn.textContent = project.name;
        projectBtn.addEventListener('click', printProject);
        return projectBtn;
    }

    const attachHorizontalRule = () => {
        let hr = document.createElement('hr');
        hr.className = "solid";
        hamitems.append(hr);
    }

    const printProject = e => {
        if (activeProjectElem) { activeProjectElem.classList.remove('project-active') };
        projectIndex = findProject(e.target.parentNode);
        activeProject = getProjects()[projectIndex];
        activeProjectElem = e.target;
        e.target.classList.add('project-active');
        document.querySelector('.proj-btns').style.display = 'block';
        document.querySelector('.proj-name').textContent = activeProject.name;
        document.querySelector('.proj-desc').textContent = activeProject.description;
    }

    const findProject = element => {
        let index = Array.from(hamitems.children).indexOf(element);
        return index / 2;
    }

    const getActiveProject = () => {
        return { projectIndex, activeProjectElem, activeProject };
    }
    return { addAllProjectsToUI, addNewProjectToUI, getActiveProject }
})();
export { ProjectUI }