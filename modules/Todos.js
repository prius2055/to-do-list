export default class Todos {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addTodo(todos, description) {
    const newTodo = { description, completed: false, index: todos.length };

    // const newTodo = { description, completed: false };
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  removeTodo(todos, index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  filteredTodos() {
    todos = todos.filter((todo) => !todo.completed);
    updateTodoIndex();
    this.displayTodo();
  }
}
