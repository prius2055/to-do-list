import { Todos, updateTodoIndex } from '../modules/Todo.js';
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
    todo.addTodo(description);
    description.value = '';
  }
  todo.displayTodo();
  updateTodoIndex();

  newTodoInput.addEventListener('change', (e) => {
    e.preventDefault();

    const description = e.target.value;
    const todo = new Todos();
    todo.addTodo(description);
    newTodoInput.value = '';
  });
});
