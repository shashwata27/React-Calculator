import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import buttonLabels from "../utils/buttonsLables";
// import "../css/style3.css";
import "../css/semanticStyle.css";

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
  state = { display: "", memory: 0, mPlusActive: true };

  numbersHandeler = (number) => {
    this.setState({ display: this.state.display + number });
  };

  operatorHandeler = (operator) => {
    let text = this.state.display;
    const len = this.state.display.length;
    if (text[len - 1] === " ") {
      text = text.slice(0, len - 3) + ` ${operator} `;
    } else {
      text = text + ` ${operator} `;
    }
    this.setState({
      display: text,
      mPlusActive: false,
    });
  };

  clearHandeler = () => {
    this.setState({ display: "", mPlusActive: true });
  };

  memoryReadHandeler = () => {
    this.setState({ display: this.state.memory, mPlusActive: true });
  };

  memoryClearHandeler = () => {
    this.setState({ memory: 0 });
  };

  memoryPlusHandeler = () => {
    this.setState({ memory: this.state.memory + parseInt(this.state.display) });
  };

  equalsHelper = (temp) => {
    for (let y = 0; y < operators.length; y++) {
      let arg = operators[y];
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
    }
    return temp;
  };
  equalsHandeler = () => {
    let text = this.state.display;
    // validation
    if (text.indexOf(" ") >= 0) {
      // deleting lingering operators
      if (text[text.length - 1] === " ") {
        text = text.slice(0, text.length - 3);
      }
      if (text[0] === " ") {
        text = text.slice(3, text.length);
      }
      let temp = text.split(" ");

      // Calculation
      temp = this.equalsHelper(temp);

      this.setState({ display: temp[0], mPlusActive: true });
    }
  };

  render() {
    return (
      <div className="main ui card">
        <div className="display image ">{this.state.display}</div>
        <div className="buttons content">
          <div className="numOps ui grid">
            <div className="num twelve wide column ">
              <ButtonWrapper names={numbers} handler={this.numbersHandeler} />
              <ButtonWrapper names={equals} handler={this.equalsHandeler} />
            </div>
            <div className="ops four wide column ">
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
              disable={this.state.mPlusActive}
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
