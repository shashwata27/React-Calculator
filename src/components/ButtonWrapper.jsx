import React from "react";
import Button from "./Button";

export default class ButtonWrapper extends React.Component {
  render() {
    return this.props.names.map((name) => {
      const temp = () => this.props.handler(name);
      return <Button keys={name} name={name} handler={temp} />;
    });
  }
}
