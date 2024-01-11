import React from "react";
import { uid } from "uid";
import AddTaskForm from "../AddTaskForm";
import Task from "../Task";
import backgrounds from "../../img";
import "./style.scss";

class MainPage extends React.Component {
  state = {
    tasks: Object.values(localStorage).map(value => JSON.parse(value)).sort((a, b) => (a.isChecked - b.isChecked) || (a.name - b.name)) || [],
    taskInfo: {
      name: '',
      isChecked: false,
      isEdit: false,
      id: uid()
    },
    temporaryName: '',
  }

  getTasks = () => {
    this.setState(() => ({
      tasks: [ ...Object.values(localStorage).map(value => JSON.parse(value)).sort((a, b) => (a.isChecked - b.isChecked) || (a.name - b.name)) ]
    }));
  }

  handleChangeTaskInfo = (event, key) => {
    this.setState({ taskInfo:
      { ...this.state.taskInfo, [key]: event.target.value }
    });
  }

  handleCheckbox = (id) => {
    let currentItem = localStorage.getItem(`task-${id}`);
    currentItem = JSON.parse(currentItem);
    currentItem['isChecked'] = !currentItem['isChecked'];
    localStorage.setItem(`task-${id}`, JSON.stringify(currentItem));  
    this.getTasks();
  }

  addTask = (event) => {
    if (this.state.taskInfo.name.trim() !== '') {
      localStorage.setItem(`task-${this.state.taskInfo.id}`, JSON.stringify(this.state.taskInfo));
      this.setState(() => ({
        tasks: [ ...this.state.tasks, this.state.taskInfo ]
      }));
      this.getTasks();
      this.setState({ taskInfo:
        { ...this.state.taskInfo, name: '', id: uid() }
      });
      event.target.value = '';
    }
  }

  editTask = (task) => {
    task.isEdit = !task.isEdit;
    this.setState({ temporaryName: task.name });
  }

  confirmEdit = () => {

  }

  cancelEdit = (task) => {
    task.isEdit = !task.isEdit;
  }

  currentTaskHandler = (value) => {
    this.setState({ temporaryName: value });
  }

  deleteTask = (id) => {
    localStorage.removeItem(`task-${id}`);
    this.getTasks();
  }

  deleteAllTasks = () => {
    localStorage.clear();
    this.getTasks();
  }

  render() {
    return (
      <div className="container" style={ { backgroundImage: `url(${backgrounds[`bg${Math.ceil(Math.random() * 10)}`]})` } }>
        <h2 className="container-title">To Do List</h2>
        <AddTaskForm 
          taskInfo={this.state.taskInfo}
          handleChangeTaskInfo={this.handleChangeTaskInfo}
          addTask={this.addTask}
          deleteAllTasks={this.deleteAllTasks}
        />
        <div className="container-tasks-list">
        {this.state.tasks.map((task, index) => (
          <Task 
            key={index}
            taskInfo={task}
            handleCheckbox={this.handleCheckbox}
            editTask={this.editTask}
            deleteTask={this.deleteTask}
            currentTaskHandler={this.currentTaskHandler}
            temporaryName={this.state.temporaryName}
          />
        ))}
        </div>
      </div>
    )
  }
}

export default MainPage;
