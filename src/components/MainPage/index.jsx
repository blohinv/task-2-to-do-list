import React from "react";
import { uid } from "uid";
import AddTaskForm from "../AddTaskForm";
import Task from "../Task";
import EditTask from "../EditTask";
import backgrounds from "../../img";
import "./style.scss";

class MainPage extends React.Component {
  state = {
    tasks: Object.values(localStorage).map(value => JSON.parse(value)) || [],
    taskInfo: {
      name: '',
      isChecked: false,
      isEdit: false,
      id: uid()
    },
    changeName: '',
    errorMessage: ''
  }

  sortTasks = () => {
    this.setState({ tasks: [ ...this.state.tasks.sort((a, b) => (a.isChecked - b.isChecked) || (a.name - b.name)) ] });
  }

  handleChangeTaskInfo = (key, value) => {
    this.setState({ taskInfo:
      { ...this.state.taskInfo, [key]: value }
    });
  }

  handleCheckbox = (task) => {
    task.isChecked = !task.isChecked;
    let currentItem = localStorage.getItem(`task-${task.id}`);
    currentItem = JSON.parse(currentItem);
    currentItem.isChecked = task.isChecked;
    localStorage.setItem(`task-${task.id}`, JSON.stringify(currentItem));
    this.sortTasks();
  }

  addTask = () => {
    if (!this.state.taskInfo.name.trim()) {
      this.setState({ errorMessage: 'please enter task name!' });
      return;
    }
    this.state.tasks.push(this.state.taskInfo);
    localStorage.setItem(`task-${this.state.taskInfo.id}`, JSON.stringify(this.state.taskInfo));
    this.setState({ taskInfo:
      { ...this.state.taskInfo, name: '', id: uid() }
    });
    this.setState({ errorMessage: '' });
    this.sortTasks();
  }

  editTask = (task) => {
    task.isEdit = !task.isEdit;
    this.setState({ changeName: task.name });
  }

  confirmEdit = (task) => {
    let currentItem = localStorage.getItem(`task-${task.id}`);
    if (currentItem) {
      currentItem = JSON.parse(currentItem);
      currentItem.name = this.state.changeName;
      task.name = this.state.changeName;
      task.isEdit = !task.isEdit;
      localStorage.setItem(`task-${task.id}`, JSON.stringify(currentItem));  
      this.setState({ tasks: [...this.state.tasks]});
      this.sortTasks();
    }
  }

  cancelEdit = (task) => {
    task.isEdit = !task.isEdit;
    this.setState({ changeName: '' });
  }

  currentTaskHandler = (newName) => {
    this.setState({ changeName: newName });
  }

  deleteTask = (id) => {
    this.setState({ tasks: [ ...this.state.tasks.filter(task => task.id !== id) ] });
    localStorage.removeItem(`task-${id}`);
  }

  deleteAllTasks = () => {
    this.setState({ tasks: [] });
    localStorage.clear();
  }
  
  componentDidMount() {
    this.sortTasks();
  }

  render() {
    return (
      <div 
        className="container" 
        style={ { backgroundImage: `url(${backgrounds[`bg${Math.ceil(Math.random() * 10)}`]})` } }
      >
        <h2 className="container-title">To Do List</h2>
        <AddTaskForm 
          taskInfo={this.state.taskInfo}
          handleChangeTaskInfo={this.handleChangeTaskInfo}
          addTask={this.addTask}
          errorMessage={this.state.errorMessage}
        />
        <button 
          type="button" 
          className={this.state.tasks.length > 0 ? "container__button" : "container__button hide"}
          onClick={this.deleteAllTasks}
        >
          Удалить все
        </button>
        <div className="container-tasks-list">
          {this.state.tasks.map((task) => (
            task.isEdit 
              ? <EditTask 
                  key={task.id}
                  taskInfo={task}
                  confirmEdit={this.confirmEdit}
                  cancelEdit={this.cancelEdit}
                  currentTaskHandler={this.currentTaskHandler}
                  changeName={this.state.changeName}
                />
              : <Task 
                key={task.id}
                taskInfo={task}
                handleCheckbox={this.handleCheckbox}
                editTask={this.editTask}
                deleteTask={this.deleteTask}
              />
            )
          )}
        </div>
      </div>
    )
  }
}

export default MainPage;
