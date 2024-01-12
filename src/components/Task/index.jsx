import React from "react";
import editButton from "../../img/edit-button.svg";
import deleteButton from "../../img/delete-button.svg";
import "./style.scss";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      taskInfo,
      handleCheckbox,
      editTask,
      deleteTask,
    } = this.props;

    return (
      <div 
        className={taskInfo.isChecked 
          ? "task task-checked"
          : "task task-unchecked"
        }
      >
        <input
          type="checkbox" 
          className="task__checkbox"
          checked={taskInfo.isChecked}
          onChange={() => handleCheckbox(taskInfo)}
        />
        <p className="task__name">
          {taskInfo.name}
        </p>
        <button 
          type="button"
          className="task__button"
          onClick={() => editTask(taskInfo)}
          disabled={taskInfo.isChecked}
        >
          <img
            className="task__svg" 
            src={editButton} 
            alt=""
          />
        </button>
        <button 
          type="button"
          className="task__button"
          onClick={() => deleteTask(taskInfo.id)}
        >
          <img
            className="task__svg" 
            src={deleteButton} 
            alt="" 
          />
        </button>
      </div>
    )
  }
}

export default Task;
