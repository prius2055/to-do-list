import './style.css';
import VerticalMenu from './img/vertical-menu.png';
import TurnLeft from './img/turn-left.png';
import Checkbox from './img/maximize-button.png';

const todos = [
  { description: 'Wash the dishes', completed: true, index: 1 },
  { description: 'Go to church', completed: true, index: 2 },
  { description: 'Go to the stadium', completed: true, index: 3 },
];

const todoList = document.querySelector('.todos');
const todoInput = document.querySelector('.todo-input');

const img = document.createElement('img');
img.src = `${TurnLeft}`;
img.alt = 'turn left';
todoInput.appendChild(img);

const myTodos = () => {
  todos.forEach((todo) => {
    todoList.innerHTML += `<li className='todo-list'><img src ='${Checkbox}' alt="checkbox"/><p>${todo.description}</p><img src ='${VerticalMenu}' alt="vertical menu" class="menu"/></li><hr/>`;
  });
};

myTodos();
