import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "hulk",
    "iron_man",
    "perman",
    "powerup_girls",
  ]); //in short term memory record
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    event.preventDefault(); //will stop the REFRESH
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Amit Todo List</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add TO
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
