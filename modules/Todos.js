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
  MarkCompleted = (todos,description,value) => {
    const newTodo = { description, completed: value, index:0 };
    this.todos = todos;
    this.todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos)); 
  };
  // clearAllCompleted = (index,value)=>{
  //   this.array = [{description:'John',completed:false,index:0},{description:'Mike',completed:false,index:1},{description:'Johnny Sins',completed:false,index:2}]
  //   this.array[index].completed = value;
  //   let newarr = this.array.filter((todo)=>!todo.completed);
  //   localStorage.setItem('todos', JSON.stringify(newarr));
  // }
}
