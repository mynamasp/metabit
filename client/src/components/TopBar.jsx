import React, { Component, useEffect } from "react";
import "./TopBar.css";

class TopBar extends Component {
  state = {
    curDate: new Date().toLocaleDateString("en-IN"),
    curTime: new Date().toLocaleTimeString("en-IN"),
  };
  render() {
    return (
      <div className="flex w-full">
        <div className="w-1/2 font-medium text-stone-600 text-lg mt-5 ml-20">
          {this.state.curTime.split(":")[0]}:{this.state.curTime.split(":")[1]}{" "}
          &nbsp; Jan {this.state.curDate.split("/")[0]}, {this.state.curDate.split("/")[2]}
        </div>
        <div className="w-1/2 mt-5 mr-20">
          <div className="walletAddressBar ml-auto text-center font-medium text-stone-600 pt-[0.4rem]">
            {"Connected: " +
              String(this.props.walletAddress.address).substring(0, 6) +
              "..." +
              String(this.props.walletAddress.address).substring(38)}
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
