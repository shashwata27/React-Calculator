import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import buttonLabels from "../utils/buttonsLables";

const {
  numbers,
  operators,
  clear,
  equals,
  memoryPlus,
  memoryRead,
  memoryClear,
} = buttonLabels;

export default class App extends React.Component {
  state = { display: "", memory: 0, mplus: true };

  numbersHandeler = (number) => {
    this.setState({ display: this.state.display + number });
  };

  operatorHandeler = (operator) => {
    this.setState({
      display: this.state.display + ` ${operator} `,
      mplus: false,
    });
  };

  clearHandeler = () => {
    this.setState({ display: "", mplus: true });
  };

  memoryReadHandeler = () => {
    this.setState({ display: this.state.memory, mplus: true });
  };

  memoryClearHandeler = () => {
    this.setState({ memory: 0 });
  };

  memoryPlusHandeler = () => {
    this.setState({ memory: this.state.memory + parseInt(this.state.display) });
  };

  equalsHandeler = () => {
    let temp = "";

    // calculation
    const temp2 = this.state.display.split(" ");
    for (let x in temp2) {
      if (temp2[x] === "/") {
        temp2[x - 1] = parseInt(temp2[x - 1]) / parseInt(temp2[x + 1]);
        temp2.pop(x);
        temp2.pop(x + 1);
      }
      console.log(temp2);
    }
    // for (let x in temp2) {
    //   if (temp2[x] === "*") {
    //     temp2[x - 1] = parseFloat(temp2[x - 1]) * parseFloat(temp2[x + 1]);
    //     temp2.pop(x);
    //     temp2.pop(x + 1);
    //   }
    // }
    // for (let x in temp2) {
    //   if (temp2[x] === "+") {
    //     temp2[x - 1] = parseFloat(temp2[x - 1]) + parseFloat(temp2[x + 1]);
    //     temp2.pop(x);
    //     temp2.pop(x + 1);
    //   }
    // }
    // for (let x in temp2) {
    //   if (temp2[x] === "-") {
    //     temp2[x - 1] = parseFloat(temp2[x - 1]) - parseFloat(temp2[x + 1]);
    //     temp2.pop(x);
    //     temp2.pop(x + 1);
    //   }
    // }

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
        <ButtonWrapper
          names={memoryPlus}
          handler={this.memoryPlusHandeler}
          disable={this.state.mplus}
        />
        <ButtonWrapper names={memoryRead} handler={this.memoryReadHandeler} />
        <ButtonWrapper names={memoryClear} handler={this.memoryClearHandeler} />
      </div>
    );
  }
}
