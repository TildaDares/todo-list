import { ProjectUI } from './projectUI.js'
import { getProjects } from './index.js'
const Todo = function(name, description, priority, dueDate, completed) {
    return { name, description, priority, dueDate, completed }
}

const addTodo = event => {
    event.preventDefault();
    const name = document.querySelector('.new-task-name').value;
    const desc = document.querySelector('.new-task-desc').value;
    const priority = document.querySelector('.new-task-pri').value;
    const dueDate = document.querySelector('.new-task-date').value;
    $('#newTask').modal('hide');
    let allProjects = getProjects();
    const index = ProjectUI.getActiveProject().projectIndex;
    allProjects[index].lists.push(Todo(name, desc, priority, dueDate, false));
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
}
export { addTodo }