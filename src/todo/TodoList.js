// import React from 'react';
import TodoItem from './TodoItem.js';
import './todo.css'
function TodoList(props) {
  const { todos } = props;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
