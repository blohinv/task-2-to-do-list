import React from "react";
import editButton from "../../img/edit-button.svg";
import deleteButton from "../../img/delete-button.svg";
import "./style.scss";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className={ this.props.taskInfo.isChecked 
        ? "container-tasks-list-task task-checked"
        : "container-tasks-list-task task-unchecked"
      }
      disabled={this.props.taskInfo.isChecked}
      >
        <input 
          type="checkbox" 
          className="container-tasks-list-task__checkbox"
          checked={this.props.taskInfo.isChecked}
          onChange={() => this.props.handleCheckbox(this.props.taskInfo.id)}
        />
        <p className="container-tasks-list-task__name">
          {this.props.taskInfo.name}
        </p>
        <button 
          type="button"
          className="container-tasks-list-task__button"
          disabled={this.props.taskInfo.isChecked}
        >
          <img
            className="container-tasks-list-task__svg" 
            src={editButton} 
            alt=""
          />
        </button>
        <button 
          type="button"
          className="container-tasks-list-task__button"
          onClick={() => this.props.deleteTask(this.props.taskInfo.id)}
        >
          <img
            className="container-tasks-list-task__svg" 
            src={deleteButton} 
            alt="" 
          />
        </button>
      </div>
    )
  }
}

export default Task;
