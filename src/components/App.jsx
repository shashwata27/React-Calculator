import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import buttonLabels from "../utils/buttonsLables";
import "../css/style3.css";

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

          temp.splice(x, 2);
          break;
        }
      }
    }
    return temp;
  };
  equalsHandeler = () => {
    // validation
    // debugger;
    if (this.state.display.indexOf(" ") >= 0) {
      let temp = this.state.display.split(" ");

      // Calculation

      temp = this.equalsHelper(temp, "/");

      temp = this.equalsHelper(temp, "*");

      temp = this.equalsHelper(temp, "+");

      temp = this.equalsHelper(temp, "-");

      this.setState({ display: temp[0], mplus: true });
    }
  };

  render() {
    return (
      <div className="main">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="numOps">
            <div className="num">
              <ButtonWrapper names={numbers} handler={this.numbersHandeler} />
              <ButtonWrapper names={equals} handler={this.equalsHandeler} />
            </div>
            <div className="ops">
              <ButtonWrapper
                names={operators}
                handler={this.operatorHandeler}
              />
            </div>
          </div>
          <div className="memory">
            <ButtonWrapper names={clear} handler={this.clearHandeler} />
            <ButtonWrapper
              names={memoryPlus}
              handler={this.memoryPlusHandeler}
              disable={this.state.mplus}
            />
            <ButtonWrapper
              names={memoryRead}
              handler={this.memoryReadHandeler}
            />
            <ButtonWrapper
              names={memoryClear}
              handler={this.memoryClearHandeler}
            />
          </div>
        </div>
      </div>
    );
  }
}
