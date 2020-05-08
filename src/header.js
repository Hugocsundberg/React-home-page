import styles from "./header.module.css";
import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollDirection: "top",
      deedIsDone: false,
      darkMode: this.props.darkMode,
    };
    this.darkModeSwitch = this.darkModeSwitch.bind(this);
  }

  toTop() {
    scroll.scrollToTop();
  }

  darkModeSwitch() {
    this.state.darkMode === true
      ? this.props.StateChangeFunction(false)
      : this.props.StateChangeFunction(true);
    console.log("header state: " + this.state.darkMode);
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({
        darkMode: this.props.darkMode,
      });
    }, 5);
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     darkMode: this.props.darkMode,
    //   });
    //   console.log(this.state.darkMode);
    // }, 500);
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
      <div
        className={`${styles.container} ${
          this.state.scrollDirection == "up"
            ? styles.up
            : this.state.scrollDirection == "down"
            ? styles.down
            : this.state.scrollDirection == "top"
            ? styles.top
            : styles.topFromDown
        } ${this.state.darkMode ? styles.black_background : " "} `}
        style={
          this.state.scrollDirection === "up"
            ? { height: "40px" }
            : this.state.scrollDirection === "down"
            ? { height: "40px" }
            : {}
        }
        // onClick={this.darkModeSwitch}
      >
        <p
          onClick={this.toTop}
          className={`${styles.text} ${
            this.state.darkMode ? styles.white_text : " "
          }`}
          style={
            this.state.scrollDirection === "up"
              ? { fontFamily: "verdana", fontSize: "13px" }
              : this.state.scrollDirection === "down"
              ? { fontFamily: "verdana", fontSize: "13px" }
              : {}
          }
        >
          {this.state.scrollDirection === "top"
            ? "HS"
            : this.state.scrollDirection === "topFromDown"
            ? "HS"
            : "To top"}
        </p>
      </div>
    );
  }
}
