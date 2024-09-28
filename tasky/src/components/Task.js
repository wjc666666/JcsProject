import React from 'react';
const Task = (props) => {
    
    return (
        <div className="container">
          <h1>Tasky</h1>
          <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
          <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
          <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} />
        </div>
      );
}
export default Task;