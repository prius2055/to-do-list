import { updateTodoIndex, displayTodo } from '../modules/displayTodos.js';
import Todos from '../modules/Todos.js';
import './style.css';
import TurnLeft from './img/turn-left.png';

document.addEventListener('DOMContentLoaded', () => {

  const todoInput = document.querySelector('.todo-input');
  const newTodoInput = document.querySelector('.new-todo-input');

  const img = document.createElement('img');
  img.src = `${TurnLeft}`;
  img.alt = 'turn left';
  todoInput.appendChild(img);

  const todo = new Todos();
  const description = newTodoInput.value;
  if (description) {
    todo.addTodo(todos, description);
    updateTodoIndex();
    todo.displayTodo();
    description.value = '';
  }
  displayTodo();
  updateTodoIndex();

  newTodoInput.addEventListener('change', (e) => {
    e.preventDefault();

    const description = e.target.value;
    const todo = new Todos();
    todo.addTodo(description);
    updateTodoIndex();
    displayTodo();
    newTodoInput.value = '';
  });
});
