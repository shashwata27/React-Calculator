import React from "react";

let temp = null;

export default class Button extends React.Component {
  helper = () => {
    if (this.props.disable === undefined) {
      temp = <button onClick={this.props.handler}>{this.props.name}</button>;
    } else {
      temp = (
        <button onClick={this.props.handler} disabled={!this.props.disable}>
          {this.props.name}
        </button>
      );
    }
  };
  render() {
    this.helper();
    return temp;
  }
}
