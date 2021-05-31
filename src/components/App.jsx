import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import buttonLabels from "../utils/buttonsLables";

const { numbers, operators, clear, equals, memoryDirect, memoryRead } =
  buttonLabels;

export default class App extends React.Component {
  state = { display: "", memory: 0, mplus: true };

  numbersHandeler = (number) => {
    this.setState({ display: this.state.display + number });
  };

  operatorHandeler = (operator) => {
    this.setState({ display: this.state.display + operator, mplus: false });
  };

  clearHandeler = () => {
    this.setState({ display: "", mplus: true });
  };

  memoryReadHandeler = () => {
    this.setState({ display: this.state.memory, mplus: true });
  };

  equalsHandeler = () => {
    const temp = "";

    // calculation

    this.setState({ display: temp, mplus: true });
  };

  render() {
    return (
      <div>
        <div>{this.state.display}</div>
        <ButtonWrapper names={numbers} handler={this.numbersHandeler} />
        <ButtonWrapper names={operators} handler={this.operatorHandeler} />
        <ButtonWrapper names={clear} handler={this.clearHandeler} />
        <ButtonWrapper names={equals} handler={this.equalsHandeler} />
        <ButtonWrapper names={memoryDirect} />
        <ButtonWrapper names={memoryRead} handler={this.memoryReadHandeler} />
      </div>
    );
  }
}
