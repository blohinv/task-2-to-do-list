import React from "react";
import ErrorMessage from "../ErrorMessage";
import "./style.scss";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      taskInfo,
      handleChangeTaskInfo,
      addTask,
      errorMessage
    } = this.props;

    return (
      <div className="add-task-form">
        <p className="add-task-form__description">Название задачи</p>
        <div className="add-task-form-field">
          <textarea  
            className="add-task-form-field__add-name"
            rows="4"
            cols="19"
            value={taskInfo.name}
            onChange={(event) => handleChangeTaskInfo('name', event.target.value)} 
            placeholder="Введите название"
          />
          <button 
            type="button" 
            className="add-task-form-field__button"
            onClick={addTask}
          >
            Добавить
          </button>
        </div>
        <ErrorMessage message={errorMessage} />
      </div>
    )
  }
}

export default AddTaskForm;
