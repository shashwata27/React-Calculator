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

  equalsHelper = (temp, arg) => {
    while (temp.indexOf(arg) >= 0) {
      for (let x = 0; x < temp.length; x++) {
        if (temp[x] === arg) {
          if (arg === "/") {
            temp[x - 1] = parseInt(temp[x - 1]) / parseInt(temp[x + 1]);
          } else if (arg === "*") {
            temp[x - 1] = parseInt(temp[x - 1]) * parseInt(temp[x + 1]);
          } else if (arg === "+") {
            temp[x - 1] = parseInt(temp[x - 1]) + parseInt(temp[x + 1]);
          } else {
            temp[x - 1] = parseInt(temp[x - 1]) - parseInt(temp[x + 1]);
          }

          // order important !!
          console.log("inner inner", temp);
          temp.pop(x + 1);
          temp.pop(x);
          break;
        }
        console.log("inner ", temp);
      }
    }
    return temp;
  };
  equalsHandeler = () => {
    // calculation
    if (this.state.display.indexOf(" ") >= 0) {
      let temp = this.state.display.split(" ");

      console.log(temp);
      temp = this.equalsHelper(temp, "/");
      console.log(temp);
      temp = this.equalsHelper(temp, "*");
      console.log(temp);
      temp = this.equalsHelper(temp, "+");
      console.log(temp);
      temp = this.equalsHelper(temp, "-");
      console.log(temp);

      this.setState({ display: temp[0], mplus: true });
    }
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
