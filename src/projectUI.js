import { getProjects } from './index.js'
const ProjectUI = (() => {
    const allProjects = getProjects();
    const hamitems = document.querySelector('.hamitems');
    let activeProject;
    let activeProjectElem;
    const addAllProjectsToUI = () => {
        for (let i = 0; i < allProjects.length; i++) {
            let projectBtn = createProjectList(i === (allProjects.length - 1));
            projectBtn.textContent = allProjects[i].name;
        }
    }

    const addNewProjectToUI = project => {
        attachHorizontalRule();
        let projectBtn = createProjectList(true);
        projectBtn.textContent = project.name;
    }

    const createProjectList = lastProject => {
        let projectLi = document.createElement('li');
        let projectBtn = document.createElement('button');
        projectLi.appendChild(projectBtn);
        hamitems.append(projectLi);
        projectBtn.className = "remove-btn";
        projectBtn.addEventListener('click', printProject);
        if (!lastProject) {
            attachHorizontalRule();
        }
        return projectBtn;
    }

    const attachHorizontalRule = () => {
        let hr = document.createElement('hr');
        hr.className = "solid";
        hamitems.append(hr);
    }

    const printProject = e => {
        if (activeProjectElem) { activeProjectElem.classList.remove('project-active') };
        activeProject = allProjects[findProject(e.target)];
        activeProjectElem = e.target;
        e.target.classList.add('project-active');
        document.querySelector('.proj-btns').style.display = 'block';
        document.querySelector('.proj-name').textContent = activeProject.name;
        document.querySelector('.proj-desc').textContent = activeProject.description;
    }

    const findProject = element => {
        let index = allProjects.findIndex(proj => proj.name === element.textContent);
        return index;
    }

    return { addAllProjectsToUI }
})();
export { ProjectUI }