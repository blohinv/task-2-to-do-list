import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TasksList from "../TasksList/TasksList";
import backgrounds from "../../helpers/backgrounds";
import React from "react";
import "./style.scss";

class MainPage extends React.Component {
  state = {
    tasks: Object.values(localStorage).map(value => JSON.parse(value)) || [],
    taskInfo: {
      name: '',
      isChecked: false,
      id: localStorage.length
    },
  }

  getTasks = () => {
    this.setState(() => ({
      tasks: [ ...Object.values(localStorage).map(value => JSON.parse(value)) ]
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
      localStorage.setItem(`task-${localStorage.length}`, JSON.stringify(this.state.taskInfo));
      this.setState(() => ({
        tasks: [ ...this.state.tasks, this.state.taskInfo ]
      }));
      this.setState({ taskInfo:
        { ...this.state.taskInfo, name: '', id: localStorage.length }
      });
      event.target.value = '';
    }
  }

  editTask = () => {

  }

  deleteTask = (id) => {
    // let tmp = localStorage.getItem(`task-${id}`);
    // console.log(tmp);
    // localStorage.removeItem(`task-${id}`);
    // console.log('done');
    // this.getTasks();
  }

  render() {
    return (<div className="container" style={ { backgroundImage: `url(${backgrounds[`bg${Math.ceil(Math.random() * 10)}`]})` } }>
      <h2 className="container-title">To Do List</h2>
      <AddTaskForm 
        taskInfo={this.state.taskInfo}
        handleChangeTaskInfo={this.handleChangeTaskInfo}
        addTask={this.addTask}
      />
      <TasksList 
        tasks={this.state.tasks} 
        handleChangeTaskInfo={this.handleChangeTaskInfo}
        handleCheckbox={this.handleCheckbox}
        deleteTask={this.deleteTask}
      />
    </div>)
  }
}

export default MainPage;
