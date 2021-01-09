import { getProjects } from './index.js'
const ProjectUI = (() => {
    const addProjectListName = () => {
        const allProjects = getProjects();
        for (let i = 0; i < allProjects.length; i++) {
            let projectBtn = createProjectList(i === (allProjects.length - 1));
            projectBtn.textContent = allProjects[i].name;
        }
    }

    const createProjectList = (lastProject) => {
        const hamitems = document.querySelector('.hamitems');
        let projectLi = document.createElement('li');
        let projectBtn = document.createElement('button');
        addProjectListener(projectBtn);
        projectLi.appendChild(projectBtn);
        hamitems.append(projectLi);
        projectBtn.className = "remove-btn";
        if (!lastProject) {
            let hr = document.createElement('hr');
            hr.className = "solid";
            hamitems.append(hr);
        }
        return projectBtn;
    }

    const addProjectListener = (projectBtn) => {
        projectBtn.addEventListener('click', );
    }
    return { addProjectListName }
})();
export { ProjectUI }