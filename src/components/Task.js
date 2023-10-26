import React from 'react';

function TaskItem({ task, onDelete }) {
 if (!task || !task.text || !task.category) {
    return null; // You can return a message indicating the task is invalid
 }

 const handleDeleteClick = () => {
    onDelete(task.id);
 };

 return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
 );
}

export default TaskItem;