import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => toggleTodo(todo._id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;