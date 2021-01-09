import { getProjects } from './index.js'
const ProjectUI = (() => {
    const allProjects = getProjects();
    let activeProject;
    const addProjectListName = () => {
        for (let i = 0; i < allProjects.length; i++) {
            let projectBtn = createProjectList(i === (allProjects.length - 1));
            projectBtn.textContent = allProjects[i].name;
        }
    }

    const createProjectList = (lastProject) => {
        const hamitems = document.querySelector('.hamitems');
        let projectLi = document.createElement('li');
        let projectBtn = document.createElement('button');
        projectLi.appendChild(projectBtn);
        hamitems.append(projectLi);
        projectBtn.className = "remove-btn";
        projectBtn.addEventListener('click', printProject);
        if (!lastProject) {
            let hr = document.createElement('hr');
            hr.className = "solid";
            hamitems.append(hr);
        }
        return projectBtn;
    }

    const printProject = (e) => {
        activeProject = findProject(e.target);
        document.querySelector('.proj-name').textContent = activeProject.name;
        document.querySelector('.proj-desc').textContent = activeProject.description;
    }

    const findProject = (element) => {
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].name === element.textContent) {
                return allProjects[i];
            }
        }
    }
    return { addProjectListName }
})();
export { ProjectUI }