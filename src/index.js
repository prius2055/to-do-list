import Todos from "../modules/Todo.js";
import "./style.css";
import TurnLeft from "./img/turn-left.png";

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector(".todo-input");
  const newTodoInput = document.querySelector(".new-todo-input");
  // const todoList = document.querySelector("todo-list");

  const img = document.createElement("img");
  img.src = `${TurnLeft}`;
  img.alt = "turn left";
  todoInput.appendChild(img);

  // const todoList = document.querySelector("todo-list");
  const todo = new Todos();
  const description = newTodoInput.value;
  if (description) {
    todo.addTodo(description);
    description.value = "";
  }
  todo.displayTodo();

  newTodoInput.addEventListener("change", (e) => {
    e.preventDefault();

    const todo = new Todos();
    todo.addTodo(e.target.value);
    newTodoInput.value = "";
  });
});

