import React from "react";

let temp = null;

export default class Button extends React.Component {
  helper = () => {
    if (this.props.disable === undefined) {
      temp = false;
    } else {
      temp = !this.props.disable;
    }
  };
  render() {
    this.helper();
    return (
      <button id={this.props.name} onClick={this.props.handler} disabled={temp}>
        {this.props.name}
      </button>
    );
  }
}
