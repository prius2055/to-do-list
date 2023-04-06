import MarkCompleted from './Functions.js';
import Todos from './Todos.js';
import VerticalMenu from '../src/img/vertical-menu.png';
import TrashCan from '../src/img/trash-can.png';

export const updateTodoIndex = (todos) => {
  todos.forEach((todo, i) => {
    todo.index = i + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

const editTodo = (todo, editedDescription) => {
  todo.description = editedDescription;
  updateTodoIndex();
};

export const displayTodo = (todos) => {
  const footerParagraph = document.querySelector('.footer-paragraph');
  const todoElements = document.querySelector('.todos');
  todoElements.innerHTML = '';

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    // CREATE CHECKBOX
    const todoCheckerButton = document.createElement('input');
    todoCheckerButton.setAttribute('type', 'checkbox');
    todoCheckerButton.className = 'checkbox';
    todoCheckerButton.checked = todo.completed;

    const todoDescription = document.createElement('input');
    todoDescription.setAttribute('readonly', 'readonly');
    todoDescription.type = 'text';
    todoDescription.className = `${
      !todo.completed ? 'todo-description' : 'todo-description mark-description'
    }`;
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

      // DELETE TODOS
      todoTrash.addEventListener('click', (e) => {
        e.preventDefault();
        const todo = new Todos();
        todo.removeTodo(todos, index);
        updateTodoIndex(todos);
        displayTodo(todos);
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

    // CHECK BOX INTERACTIVITY
    todoCheckerButton.addEventListener('click', () => {
      MarkCompleted(todo);
      updateTodoIndex(todos);

      todoDescription.className = `${
        !todo.completed
          ? 'todo-description'
          : 'todo-description mark-description'
      }`;

      todoDescription.classList.add('active');
    });
  });

  footerParagraph.addEventListener('click', () => {
    const filterTodos = todos.filter((todo) => !todo.completed);
    updateTodoIndex(filterTodos);
    displayTodo(filterTodos);
  });
};
