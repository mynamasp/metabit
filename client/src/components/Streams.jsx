import React, { Component } from "react";
import "./Streams.css";

class Streams extends Component {
  state = {};
  render() {
    return (
      <div className="flex m-10 mt-20">
        <div className="flex flex-col w-1/2">
          <div className="self-center justify-center">
            <div className="stream-box p-4">
              <iframe
                className="w-full h-full overflow-hidden"
                src="http://127.0.0.1:5000"
              ></iframe>
            </div>
            <div className="log-box mx-auto mt-20 p-10">
              <div className="text-xl font-medium text-center text-stone-600">
                Face Log
              </div>
              <div className="underscore-line mb-5"></div>
              <div className="flex w-full text-center text-stone-600">
                <div className="w-1/3 flex flex-col space-y-2">
                  {this.props.faceLog
                    .slice(0)
                    .reverse()
                    .map((log) => {
                      const name = log[0];
                      return <div>{name}</div>;
                    })}
                </div>
                <div className="w-2/3 flex flex-col space-y-2">
                  {this.props.faceLog
                    .slice(0)
                    .reverse()
                    .map((log) => {
                      const timeStamp = log[1];
                      const dateVal = new Date(
                        timeStamp * 1000
                      ).toLocaleDateString("en-IN");
                      const timeVal = new Date(
                        timeStamp * 1000
                      ).toLocaleTimeString("en-IN");
                      return (
                        <div>{timeVal.toUpperCase() + ", " + dateVal}</div>
                      );
                    })}
                </div>
              </div>
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
