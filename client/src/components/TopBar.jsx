import React, { Component, useEffect } from "react";
import "./TopBar.css";

class TopBar extends Component {
  state = { walletAddress: this.props.walletAddress };

  render() {
    return (
      <div className="flex w-full">
        <div className="w-1/2 font-medium text-stone-600 text-lg mt-5 ml-20">
          19:11 &nbsp; Jan 14, 2023
        </div>
        <div className="w-1/2 mt-5 mr-20">
          <div className="walletAddressBar ml-auto text-center font-medium text-stone-600 pt-[0.4rem]">
          {this.state.walletAddress.length > 0 ? (
          "Connected: " +
          String(this.state.walletAddress).substring(0, 6) +
          "..." +
          String(this.state.walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
