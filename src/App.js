// import "./App.css";
// import Card from "./Card";
// import Data from "./Data";

// function App() {
//   const items = Data.map((items) => {
//     return (
//       <Card
//         title={items.title}
//         imageUrl={items.imageUrl}
//         description={items.description}
//         startDate={items.startDate}
//         endDate={items.endDate}
//         location={items.location}
//       ></Card>
//     );
//   });

//   return <div className="App">{items}</div>;
// }

// export default App;



import React, { useState } from 'react';
import TodoList from './todo/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return;
    const todo = {
      id: Math.random(),
      text: newTodo,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

