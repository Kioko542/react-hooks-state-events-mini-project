import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({ text: "", category: "All" });

  const handleTextChange = (e) => {
    setNewTask({ ...newTask, text: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setNewTask({ ...newTask, category: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure both text and category are filled out
    if (newTask.text && newTask.category) {
      onTaskFormSubmit(newTask);
      setNewTask({ text: "", category: "All" });
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={newTask.category}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
