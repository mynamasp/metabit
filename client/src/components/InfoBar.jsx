import React, { Component } from "react";
import { BsGear } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineDeviceHub } from "react-icons/md";
import "./InfoBar.css";

class InfoBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="flex main mt-20 w-full">
          <div className="flex flex-col space-y-4 text-center self-center w-1/3">
            <div className="text-6xl mx-auto text-green-500 ">
              <BsGear />
            </div>
            <div className="text-xl font-medium text-gray-600">
              Active Processes
            </div>
            <div className="text-3xl text-gray-800">6</div>
          </div>
          <div className="flex flex-col space-y-4 text-center self-center w-1/3">
            <div className="text-6xl mx-auto text-yellow-500 ">
              <FiAlertTriangle />
            </div>
            <div className="text-xl font-medium text-gray-600">
              Inactive Processes
            </div>
            <div className="text-3xl text-gray-800">3</div>
          </div>
          <div className="flex flex-col space-y-4 text-center self-center w-1/3">
            <div className="text-6xl mx-auto text-purple-500 fill-none">
              <MdOutlineDeviceHub />
            </div>
            <div className="text-xl font-medium text-gray-600">
              Connected Nodes
            </div>
            <div className="text-3xl text-gray-800">4</div>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}

export default InfoBar;
