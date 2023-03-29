import Checkbox from '../src/img/maximize-button.png';
import VerticalMenu from '../src/img/vertical-menu.png';
import TrashCan from '../src/img/trash-can.png';

export default class Todo {
  constructor() {
    this.todos = [];
    this.description = '';
    this.completed = false;
    this.index = this.todos.length;
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  }

  addTodo(description, completed, index) {
    const newTodo = { description, completed, index };
    this.todos.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.displayTodo();
  }

  removeTodo(index) {
    this.todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(this.todos));

    this.displayTodo();
  }

  displayTodo() {
    const todos = document.querySelector('.todos');
    todos.innerHTML = '';

    this.todos.forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';

      const todoCheckerButton = document.createElement('img');
      todoCheckerButton.setAttribute('src', `${Checkbox}`);
      todoCheckerButton.setAttribute('alt', 'checkbox');

      const todoDescription = document.createElement('input');
      todoDescription.className = 'todo-list';
      todoDescription.setAttribute('readonly', 'readonly');
      todoDescription.type = 'text';
      todoDescription.className = 'todo-description';
      todoDescription.value = `${todo.description}`;

      const menuDiv = document.createElement('div');
      menuDiv.className = 'menu';

      const todoVerticalMenu = document.createElement('img');
      todoVerticalMenu.setAttribute('src', `${VerticalMenu}`);
      todoVerticalMenu.setAttribute('alt', 'vertical-menu');
      todoVerticalMenu.className = 'vertical-menu';

      const todoTrash = document.createElement('img');
      todoTrash.setAttribute('src', `${TrashCan}`);
      todoTrash.setAttribute('alt', 'todo-trash');
      todoTrash.className = 'todo-trash';

      menuDiv.appendChild(todoTrash);
      menuDiv.appendChild(todoVerticalMenu);

      todoItem.appendChild(todoCheckerButton);
      todoItem.appendChild(todoDescription);
      todoItem.appendChild(menuDiv);

      todoItem.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        todoItem.classList.add('active');
        todoDescription.classList.add('active');
        todoVerticalMenu.classList.add('active');
        todoTrash.classList.add('active');

        todoDescription.removeAttribute('readonly');
        todoDescription.focus();

        todoTrash.addEventListener('click', (e) => {
          e.preventDefault();
          this.removeTodo(index);
        });
      });

      todoItem.addEventListener('mouseleave', (e) => {
        e.preventDefault();
        todoItem.classList.remove('active');
        todoDescription.classList.remove('active');
        todoVerticalMenu.classList.remove('active');
        todoTrash.classList.remove('active');

        todoDescription.setAttribute('readonly', 'readonly');
      });

      todos.appendChild(todoItem);
    });
  }
}
