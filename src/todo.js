import { ProjectUI } from './projectUI.js'
import { getProjects } from './index.js'
const Todo = function(name, description, priority, dueDate) {
    return { name, description, priority, dueDate }
}
const addTodo = () => {
    const index = ProjectUI.getActiveProject().projectIndex;
    getProjects()[index].lists.shift();
}