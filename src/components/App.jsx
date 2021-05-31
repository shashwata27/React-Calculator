import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import buttonLabels from "../utils/buttonsLables";

const { numbers, operators, clear, equals, memoryDirect, memoryRead } =
  buttonLabels;
export default class App extends React.Component {
  state = { display: "", memory: 0 };
  render() {
    return (
      <div>
        <div>{this.state.display}</div>
        <ButtonWrapper names={numbers} />
        <ButtonWrapper names={operators} />
        <ButtonWrapper names={clear} />
        <ButtonWrapper names={equals} />
        <ButtonWrapper names={memoryDirect} />
        <ButtonWrapper names={memoryRead} />
      </div>
    );
  }
}
