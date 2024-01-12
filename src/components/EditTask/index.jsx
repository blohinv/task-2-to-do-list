import React from "react";
import doneButton from "../../img/done-button.svg";
import cancelButton from "../../img/cancel-button.svg";
import "./style.scss";

class EditTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      taskInfo,
      confirmEdit,
      cancelEdit,
      currentTaskHandler,
      temporaryName
    } = this.props;

    return (
      <div className="edit-task">
        <button 
          type="button"
          className="edit-task__button"
          onClick={() => confirmEdit(taskInfo)}
        >
          <img
            className="edit-task__svg" 
            src={doneButton} 
            alt=""
          />
        </button>
        <input 
          type="text" 
          className="edit-task__change"
          value={temporaryName}
          onChange={(event) => currentTaskHandler(event.target.value)}
        />
        <button 
          type="button"
          className="edit-task__button"
          onClick={() => cancelEdit(taskInfo)}
        >
          <img
            className="edit-task__svg" 
            src={cancelButton} 
            alt=""
          />
        </button>
      </div>
    )
  }
}

export default EditTask;
