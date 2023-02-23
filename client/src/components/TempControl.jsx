import React, { Component } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./TempControl.css";
class TempControl extends Component {
  state = {
    count: 100,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="w-2/3 mx-auto">
        <div className="box-l mx-auto">
          <div className="flex flex-col m-4 h-full">
            <div className="text-xl text-gray-600 h-1/3">Oven</div>
            <div className="w-full flex h-1/3">
              <div
                onClick={this.handleIncrement}
                className="knob ml-auto py-2 pl-[0.4rem] font-bold hover:cursor-pointer"
              >
                <AiOutlinePlus />
              </div>
              <div className="text-3xl mx-5">
                {this.state.count}{" "}
                <span className="text-sm">
                  <sup>°C</sup>
                </span>
              </div>
              <div
                onClick={this.handleDecrement}
                className="knob mr-auto py-2 pl-[0.4rem] font-bold hover:cursor-pointer"
              >
                <AiOutlineMinus />
              </div>
            </div>
            <div className="rounded-full self-end">
              <div className={`toggle-switch`}>
                <div className="toggle-switch-knob"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TempControl;
