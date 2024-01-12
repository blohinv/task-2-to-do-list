import React from "react";
import "./style.scss";

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="error-message">{this.props.message}</p>
    )
  }
}

export default ErrorMessage;
