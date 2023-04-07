/**
 * @jest-environment jsdom
 */

import Todos from './Todos.js';

describe('todos', () => {
  test('Adding a new item to the list', () => {
    const todo = new Todos();
    expect(todo).toBeDefined();
    todo.addTodo([], 'church');
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual([
      { description: 'church', completed: false, index: 0 },
    ]);
  });
  test('Delete item from the list', () => {
    const todo = new Todos();
    expect(todo).toBeDefined();
    todo.removeTodo([]);
    expect(JSON.parse(localStorage.getItem('todos'))).not.toContain([
      { description: 'church', completed: false, index: 0 },
    ]);
  });
  test('check the checked items', () => {
    const todo = new Todos();
    // expect(todo).toBeDefined();
    todo.MarkCompleted([],'book',true);
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual([
      { description: 'book', completed: true, index: 0 },
    ]);
  });
  // test('Clear the checked items', () => {
  //   const todo = new Todos();
  //   // expect(todo).toBeDefined();
  //   todo.MarkCompleted(2,true);
  //   expect(JSON.parse(localStorage.getItem('todos'))).toEqual([{description:'John',completed:false,index:0},{description:'Mike',completed:false,index:1}]);
  // });
});
