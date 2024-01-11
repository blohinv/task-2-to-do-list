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
      currentTaskHandler, 
      temporaryName
    } = this.props;

    return (
      <div 
        className={taskInfo.isChecked 
          ? "task-container task-checked"
          : "task-container task-unchecked"
        }
        disabled={taskInfo.isChecked}
      >
        <input
          type="checkbox" 
          className="task-container__checkbox"
          checked={taskInfo.isChecked}
          onChange={() => handleCheckbox(taskInfo.id)}
        />
        {taskInfo.isEdit
        ? <>
            <input 
              type="text" 
              className="task-container__name-change"
              value={temporaryName}
              onChange={(event) => currentTaskHandler(event.target.value)}
            />
            <button 
              type="button"
              className="task-container__button"
              onClick={() => editTask(taskInfo)}
              disabled={taskInfo.isChecked}
            >
              <img
                className="task-container__svg" 
                src={editButton} 
                alt=""
              />
            </button>
          </>
        : <>
            <p className="task-container__name">
              {taskInfo.name}
            </p>
            <button 
              type="button"
              className="task-container__button"
              onClick={() => editTask(taskInfo)}
              disabled={taskInfo.isChecked}
            >
              <img
                className="task-container__svg" 
                src={editButton} 
                alt=""
              />
            </button>
          </>
        }
        
        <button 
          type="button"
          className="task-container__button"
          onClick={() => deleteTask(taskInfo.id)}
        >
          <img
            className="task-container__svg" 
            src={deleteButton} 
            alt="" 
          />
        </button>
      </div>
    )
  }
}

export default Task;
