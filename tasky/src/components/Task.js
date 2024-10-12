import React from 'react';

const Task = (props) => {
    const getPriorityStyle = (priority) => {
        switch (priority) {
            case "High":
                return { backgroundColor: 'red', color: 'white' };
            case "Medium":
                return { backgroundColor: 'orange', color: 'white' };
            case "Low":
                return { backgroundColor: 'green', color: 'white' };
            default:
                return { backgroundColor: '#5bb4c4', color: 'white' };
        }
    };

    return (
        <div className="card" style={getPriorityStyle(props.priority)}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
}

export default Task;
