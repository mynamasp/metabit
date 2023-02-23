import React, { Component } from "react";
import { BsChevronLeft } from "react-icons/bs";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    currentPage: 1,
  };

  handleOnClick1 = () => {
    this.props.handlePageChange(3);
    this.setState({ currentPage: 3 });
  };
  handleOnClick2 = () => {
    this.props.handlePageChange(2);
    this.setState({ currentPage: 2 });
  };
  handleOnClick3 = () => {
    this.props.handlePageChange(1);
    this.setState({ currentPage: 1 });
  };

  render() {
    return (
      <div className="vertical">
        <div className="wrapper flex">
          <div className=" text-4xl -ml-12 mt-1 text-white text-center">
            <BsChevronLeft />
          </div>
          <a
            onClick={this.handleOnClick1}
            className={`text-4xl mx-9 hover:text-white hover:cursor-pointer ${
              this.state.currentPage === 3 ? "selected" : "unselected"
            }`}
          >
            DEVICES
          </a>
          <a
            onClick={this.handleOnClick2}
            className={`text-4xl mx-9 hover:text-white hover:cursor-pointer ${
              this.state.currentPage === 2 ? "selected" : "unselected"
            }`}
          >
            STREAMS
          </a>
          <a
            onClick={this.handleOnClick3}
            className={`text-4xl mx-9 hover:text-white hover:cursor-pointer ${
              this.state.currentPage === 1 ? "selected" : "unselected"
            }`}
          >
            DASHBOARD
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
