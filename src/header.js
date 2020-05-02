import "./header.css";
import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrollDirection: "top",
      deedIsDone: false,
    };
  }

  componentDidMount() {
    let rawDirection;
    window.addEventListener("scroll", () => {
      const firstCheck = window.scrollY;
      setTimeout(() => {
        const secondCheck = window.scrollY;
        if (firstCheck < secondCheck) {
          rawDirection = "down";
          this.setTheState(rawDirection);
        } else if (firstCheck > secondCheck) {
          rawDirection = "up";
          this.setTheState(rawDirection);
        }
      }, 20);

      if (window.scrollY == 0 && this.state.scrollDirection == "down") {
        setTimeout(() => {
          rawDirection = "topFromDown";
          this.setTheState(rawDirection);
        }, 650);
      } else if (window.scrollY == 0) {
        setTimeout(() => {
          rawDirection = "top";
          this.setTheState(rawDirection);
        }, 650);
      }
    });
  }

  setTheState(rawDirection) {
    if (!this.state.deedIsDone) {
      this.setState({ scrollDirection: rawDirection });
      this.setState({ deedIsDone: true });
      setTimeout(() => {
        this.setState({ deedIsDone: false });
      }, 650);
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className={`container ${this.state.scrollDirection}`}>
        <p className="text">{this.state.scrollDirection}</p>
      </div>
    );
  }
}
