import React from "react";
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
      deleteAllTasks,
      validationError
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
            onChange={(event) => handleChangeTaskInfo(event, 'name')} 
            placeholder="Введите название"
          />
          <div className="add-task-form-field-actions">
            <button 
              type="button" 
              className="add-task-form-field-actions__button"
              onClick={addTask}
            >
              Добавить
            </button>
            <button 
              type="button" 
              className="add-task-form-field-actions__button"
              onClick={deleteAllTasks}
            >
              Удалить все
            </button>
          </div>
          <p className="add-task-form-field__validation-error">{validationError}</p>
        </div>
      </div>
    )
  }
}

export default AddTaskForm;
