import React, { Component } from "react";
import { BsChevronLeft } from "react-icons/bs";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="vertical">
        <div className="wrapper flex">
          <div className=" text-4xl -ml-12 mt-1 text-white text-center">
            <BsChevronLeft />
          </div>
          <a className="text-4xl mx-9 unselected hover:text-white hover:cursor-pointer">
            DEVICES
          </a>
          <a className="text-4xl mx-9 unselected hover:text-white hover:cursor-pointer">
            STREAMS
          </a>
          <a className="text-4xl ml-9 mr-16 selected hover:text-white hover:cursor-pointer">
            DASHBOARD
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
