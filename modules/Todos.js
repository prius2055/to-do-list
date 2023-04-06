export default class Todos {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  // ADD AN ITEM
  addTodo(todos, description) {
    const newTodo = { description, completed: false, index: todos.length };
    this.todos = todos;
    this.todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // REMOVE AN ITEM
  removeTodo(todos, index) {
    this.todos = todos;
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
