import React from "react";
import Task from "../Task/Task";
import "./style.scss";

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="container-add-task-form">
      <p className="container-add-task-form__description">Название задачи</p>
      <div className="container-add-task-form-field">
        <textarea  
          className="container-add-task-form-field__add-name"
          rows="4"
          cols="19"
          value={this.props.taskInfo.name}
          onChange={(event) => this.props.handleChangeTaskInfo(event, 'name')} 
          placeholder="Введите название"
        />
        <button 
          type="button" 
          className="container-add-task-form-field__button-add"
          onClick={this.props.addTask}
        >
          Добавить
        </button>
      </div>
    </div>)
  }
}

export default AddTaskForm;
