import { updateTodoIndex, displayTodo } from '../modules/displayTodos.js';
import Todos from '../modules/Todos.js';
import './style.css';
import TurnLeft from './img/turn-left.png';

document.addEventListener('DOMContentLoaded', () => {
  // CHECKING LOCAL STORAGE FOR ANY STORED ITEMS:INITIAL CHECK
  let todos;

  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
  } else {
    todos = [];
  }

  const todoInput = document.querySelector('.todo-input');
  const newTodoInput = document.querySelector('.new-todo-input');

  const img = document.createElement('img');
  img.src = `${TurnLeft}`;
  img.alt = 'turn left';
  todoInput.appendChild(img);

  // CHECKING INPUT FIELD FOR ANY ENTERED INFO: INITIAL CHECK
  const todo = new Todos();
  const description = newTodoInput.value;
  if (description) {
    todo.addTodo(todos, description);
    updateTodoIndex(todos);
    displayTodo(todos);
    description.value = '';
  }
  displayTodo(todos);
  updateTodoIndex(todos);

  // ENTER NEW ITEM
  newTodoInput.addEventListener('change', (e) => {
    e.preventDefault();

    const description = e.target.value;
    const todo = new Todos();
    todo.addTodo(todos, description);
    updateTodoIndex(todos);
    displayTodo(todos);
    newTodoInput.value = '';
  });
});
