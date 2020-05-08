// import React from "react";
import React, { Component } from "react";
import styles from "./darkMode_switch.module.css";

class LightSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightHanded: true,
      darkMode: this.props.darkMode,
    };
    this.darkModeSwitch = this.darkModeSwitch.bind(this);
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
    window.addEventListener("touchend", (e) => {
      if (e.x > window.innerWidth / 2) {
        this.setState({ rightHanded: true });
      } else {
        this.setState({ rightHanded: false });
      }
    });
  }
  render() {
    return (
      <div
        className={`${styles.switch} ${
          this.state.rightHanded ? styles.rightHanded : styles.leftHanded
        } ${this.state.darkMode ? styles.darkMode : styles.lightMode}`}
        onClick={this.darkModeSwitch}
      ></div>
    );
  }
}

export default LightSwitch;
