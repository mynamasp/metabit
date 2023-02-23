import React, { Component } from "react";
import ActuatorControl from "./ActuatorControl";
import TempControl from "./TempControl";

class ControlPanel extends Component {
  state = {
    actuatorControllers: [
      { id: 1, name: "Actuator 1", value: false },
      { id: 2, name: "Actuator 2", value: false },
      { id: 3, name: "Actuator 3", value: false },
    ],
  };

  handleStateChange = (actuatorId) => {
    let actuatorControllers = this.state.actuatorControllers;
    console.log(actuatorControllers);
    actuatorControllers.map((actuatorControl) => {
      if (actuatorControl.id === actuatorId) {
        actuatorControl.value = !actuatorControl.value;
        this.props.handleStateChange(
          actuatorControl.name,
          actuatorControl.value
        );
      }
    });

    this.setState({ actuatorControllers });
  };

  render() {
    return (
      <div className="mt-12 mx-auto items-center justify-center">
        <div className="flex w-full">
          {this.state.actuatorControllers.map((actuatorControl) => (
            <ActuatorControl
              key={actuatorControl.id}
              id={actuatorControl.id}
              name={actuatorControl.name}
              value={actuatorControl.value}
              onStateChange={this.handleStateChange}
            />
          ))}
        </div>
        <div className="mt-12 mx-auto items-center justify-center mb-20">
          <div className="flex w-full">
            <TempControl />
            <ActuatorControl key={4} name={"Actuator 4"} />
          </div>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
