import { useState } from "react";
import "./ToDoList.css"; // Import CSS file

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (isEditing) {
        setTodos(todos.map(todo => 
          todo.id === editId ? { ...todo, text: inputValue } : todo
        ));
        setIsEditing(false);
        setEditId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: inputValue }]);
      }
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, text) => {
    setIsEditing(true);
    setEditId(id);
    setInputValue(text);
  };

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new ToDo"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <ul className="todo-list">
  {todos.map((todo) => (
    <li key={todo.id} className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button className="edit-button" onClick={() => handleEdit(todo.id, todo.text)}>✏️</button>
        <button className="delete-button" onClick={() => handleDelete(todo.id)}>❌</button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default ToDoList;
