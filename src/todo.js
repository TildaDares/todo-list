import { ProjectUI } from './projectUI.js'
import { getProjects } from './index.js'
import TodoUI from './todoUI.js'
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
    const allProjects = getProjects();
    const todo = Todo(name, desc, priority, dueDate, false);
    const index = ProjectUI.getActiveProject().projectIndex;
    allProjects[index].lists.push(todo);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    TodoUI.createCard(todo, getProjects()[index].lists.length - 1);
}

const removeTodo = event => {
    event.preventDefault();
    const todoIndex = findTodo(event.target.parentNode.parentNode.parentNode);
    const projectIndex = ProjectUI.getActiveProject().projectIndex;
    const allProjects = getProjects();
    allProjects[projectIndex].lists.splice(todoIndex, 1);
    localStorage.setItem('allProjects', JSON.stringify(allProjects));
    document.querySelector('#accordionExample').removeChild(event.target.parentNode.parentNode.parentNode);
}

const findTodo = element => {
    const accordion = document.querySelector('#accordionExample');
    let index = Array.from(accordion.children).indexOf(element);
    return index;
}

export { addTodo, removeTodo }