import React from "react";
import Button from "./Button";

export default class ButtonWrapper extends React.Component {
  render() {
    return this.props.names.map((name) => <Button keys={name} name={name} />);
  }
}
