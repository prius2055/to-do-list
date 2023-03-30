import Checkbox from '../src/img/maximize-button.png';
import VerticalMenu from '../src/img/vertical-menu.png';
import TrashCan from '../src/img/trash-can.png';

let todos;

if (localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItem('todos'));
} else {
  todos = [];
}

export const updateTodoIndex = () => {
  todos.forEach((todo, i) => {
    todo.index = i + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

const editTodo = (todo, editedDescription) => {
  todo.description = editedDescription;
  updateTodoIndex();
};

export class Todos {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTodo(description) {
    const newTodo = { description, completed: false, index: todos.length };
    todos.push(newTodo);

    updateTodoIndex();

    this.displayTodo();
  }

  removeTodo(index) {
    todos.splice(index, 1);

    updateTodoIndex();
    this.displayTodo();
  }

  displayTodo() {
    const todoElements = document.querySelector('.todos');
    todoElements.innerHTML = '';

    todos.forEach((todo, index) => {
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

        // Edit to-do description
        todoDescription.removeAttribute('readonly');
        todoDescription.focus();
        todoDescription.addEventListener('change', (e) => {
          const editedDescription = e.target.value;
          editTodo(todo, editedDescription);
          updateTodoIndex();
        });

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

      todoElements.appendChild(todoItem);
    });
  }
}
