import React, { Component } from "react";
import "./Streams.css";

class Streams extends Component {
  state = {};
  render() {
    return (
      <div className="flex m-10 mt-20">
        <div className="flex flex-col w-1/2">
          <div className="self-center justify-center">
            <div className="stream-box"></div>
            <div className="log-box mx-auto mt-20 p-10">
              <div className="text-xl font-medium text-center text-stone-600">
                Face Log
              </div>
              <div className="underscore-line animate-ping"></div>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="self-center justify-center">
            <div className="stream-box"></div>
            <div className="log-box mx-auto mt-20"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Streams;
