/**
 * @jest-environment jsdom
 */

import Todos from './Todos';

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
});
