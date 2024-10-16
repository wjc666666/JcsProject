import React from 'react';

const Task = (props) => {
  const getPriorityClass = () => {
    switch (props.priority) {
      case 'High':
        return 'priority-badge priority-high';
      case 'Medium':
        return 'priority-badge priority-medium';
      case 'Low':
        return 'priority-badge priority-low';
      default:
        return '';
    }
  };

  return (
    <div className="card">
      <h3 className="title">{props.title}</h3>
      <p>Due: {props.deadline}</p>
      <p>Details: {props.description}</p>
      {/* Priority Badge */}
      <div className={getPriorityClass()}>
        <p>{props.priority}</p>
      </div>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
