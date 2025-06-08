import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Function to add a new task
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  // Function to delete a task
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="vite-project">
        <div className="header">
          <h1>Todo List App</h1>
          <p>Todo List 🚀</p>

          <button
            className="toggle-button"
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Task Input Section */}
        <div className="input-section">
          <input
            type="text"
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className="add-btn" onClick={addTodo} disabled={!input.trim()}>
            Add
          </button>
        </div>

        {/* Task List Section */}
        <ul className="task-list">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {todo.text}
                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                  ❌
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
