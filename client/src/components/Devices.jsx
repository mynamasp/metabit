import React, { Component } from "react";
import "./Devices.css";

class Devices extends Component {
  state = {};
  render() {
    return (
      <div className="flex m-10 space-x-10">
        <div className="device-box flex flex-col p-4">
          <div className="text-xl text-center font-medium text-slate-800">
            EndNode 1
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Name:</div>{" "}
            <div className="w-1/2">EndNode 1</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device ID:</div>{" "}
            <div className="w-1/2">0</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Type:</div>{" "}
            <div className="w-1/2">EndNode</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Hash:</div>{" "}
            <div className="w-1/2 break-words">
              0x8b650a2207e4e2e0a95f585104eb8cf5a3148af438f845fe91af9f4d737adda9
            </div>
          </div>
        </div>
        <div className="device-box flex flex-col p-4">
          <div className="text-xl text-center font-medium text-slate-800">
            EndNode 2
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Name:</div>{" "}
            <div className="w-1/2">EndNode 2</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device ID:</div>{" "}
            <div className="w-1/2">1</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Type:</div>{" "}
            <div className="w-1/2">EndNode</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Hash:</div>{" "}
            <div className="w-1/2 break-words">
              0x5d09ff13d0c3d6d7287e824402150040b237f3dcc93f2f0fbf346f22012eb2dd
            </div>
          </div>
        </div>
        <div className="device-box flex flex-col p-4">
          <div className="text-xl text-center font-medium text-slate-800">
            Gateway 1
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Name:</div>{" "}
            <div className="w-1/2">Gateway 1</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device ID:</div>{" "}
            <div className="w-1/2">2</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Type:</div>{" "}
            <div className="w-1/2">Gateway</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Hash:</div>{" "}
            <div className="w-1/2 break-words">
              0x75c6f4adc0d7159c68c86a103387dbe3a3694532166bb115e56525bfa147954b
            </div>
          </div>
        </div>
        <div className="device-box flex flex-col p-4">
          <div className="text-xl text-center font-medium text-slate-800">
            Gateway 2
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Name:</div>{" "}
            <div className="w-1/2">Gateway 2</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device ID:</div>{" "}
            <div className="w-1/2">3</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Type:</div>{" "}
            <div className="w-1/2">Gateway</div>
          </div>
          <div className="text-slate-600 mt-10 flex">
            <div className="w-1/2 font-medium">Device Hash:</div>{" "}
            <div className="w-1/2 break-words">
              0xb0a77d15837df7f946083dff99b7c29b7d687a0f527538ff00d06951cfd7ecd8
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Devices;
