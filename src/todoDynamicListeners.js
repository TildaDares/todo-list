import { removeTodo, editTodo } from './todo.js'
const addListeners = index => {
    // document.querySelector(`#checkbox${index}`).addEventListener('change', );
    document.querySelector(`#form${index}`).addEventListener('submit', editTodo);
    document.querySelector(`#del${index}`).addEventListener('click', removeTodo);
}
export default addListeners