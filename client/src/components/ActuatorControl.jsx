import React, { Component } from "react";
import "./ActuatorControl.css";

class ActuatorControl extends Component {
  state = {
    name: this.props.name,
  };

  render() {
    return (
      <div className="w-1/3 ">
        <div className="box mx-auto">
          <div className="flex flex-col m-4 min-h-0 h-full">
            <div className="text-xl text-gray-600">{this.state.name}</div>
            <div className="rounded-full h-full self-end mt-28">
              <div
                className={`toggle-switch ${
                  this.props.value ? "toggle-switch-on" : ""
                }`}
                onClick={() => this.props.onStateChange(this.props.id)}
              >
                <div className="toggle-switch-knob"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActuatorControl;
