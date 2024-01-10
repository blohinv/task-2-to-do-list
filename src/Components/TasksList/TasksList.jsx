import Task from "../Task/Task";
import React from "react";

class TasksList extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (<div className="container-tasks-list">
      {(this.props.tasks).sort((a, b) => (a.isChecked - b.isChecked) || (a.id - b.id)).map((task, index) => (
        <Task 
          key={index}
          index={index}
          taskInfo={task}
          handleChangeTaskInfo={this.props.handleChangeTaskInfo}
          handleCheckbox={this.props.handleCheckbox}
          deleteTask={this.props.deleteTask}
        />
      ))}
    </div>)
  }
}

export default TasksList;
