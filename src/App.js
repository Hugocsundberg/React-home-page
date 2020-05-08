import styles from "./video_block.module.css";
import React from "react";
import ReactCOMP, { Component } from "react";
import Header from "./header";
import Video_block from "./video_block";
import Image_block from "./image_block";
import LightSwitch from "./darkMode_switch";
import "./fadein.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
    this.changeStateDarkMode = this.changeStateDarkMode.bind(this);
  }

  changeStateDarkMode(bool) {
    this.setState({
      darkMode: bool,
    });
    this.render();
  }

  render() {
    return (
      <div className="App">
        <Header
          darkMode={this.state.darkMode}
          StateChangeFunction={this.changeStateDarkMode}
        />
        <LightSwitch
          darkMode={this.state.darkMode}
          StateChangeFunction={this.changeStateDarkMode}
        ></LightSwitch>
        <Video_block
          darkMode={this.state.darkMode}
          video="2"
          height="60"
          text="True evolution är ett projekt som Incidunt
            enim ad magnam beatae, minus ipsum eius commodi eos quod
            consequuntur. Minima hic autem quas? Sunt hic optio error iste
            fugit."
          expandedText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus molestie maximus. Donec fringilla leo eros, id interdum dui rutrum quis. Quisque placerat augue eu tellus vulputate placerat. Duis at molestie felis, id facilisis nunc. Pellentesque rutrum pretium sem, eu sagittis lacus bibendum id. Vivamus tincidunt dignissim mi, at consectetur arcu congue ut. Vestibulum ornare pretium quam, ut vulputate justo interdum vitae. Fusce fermentum feugiat rutrum.

          Mauris sagittis, sapien id finibus pharetra, arcu purus congue sem, sed malesuada massa augue in diam. Proin pretium, tortor eget tempor eleifend, tellus dolor tempus purus, eu iaculis metus erat porttitor quam. Cras metus neque, ullamcorper nec auctor vel, convallis nec ex. Curabitur porttitor facilisis magna eget maximus. Duis tempus, felis at varius congue, felis eros egestas nibh, quis cursus odio libero eu libero. Vivamus sit amet nulla interdum, posuere purus at, porttitor eros. Nullam tincidunt efficitur lorem, sed bibendum justo vehicula eget. Aliquam in lectus lacinia, vestibulum tortor ac, ullamcorper dui. Duis condimentum mattis sapien, dignissim venenatis libero semper id. Nulla facilisi. Vestibulum id vestibulum nulla. Phasellus ut ultricies erat, at scelerisque purus. Proin at purus egestas, efficitur tellus bibendum, elementum ligula. Nullam dignissim fringilla dolor, sit amet porttitor metus ultrices in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          
          Sed vel vehicula urna, eget blandit est. Suspendisse elementum tortor at gravida venenatis. Sed ultricies orci non nulla vulputate, ac aliquet libero tincidunt. Nulla aliquet commodo est, ut ultrices ligula porta et. Fusce ac diam eget nibh varius lacinia. Nulla iaculis, risus vel consectetur imperdiet, magna sem varius tellus, vel sagittis magna urna id nisl. Donec sodales ante non faucibus consectetur. Curabitur risus sem, lobortis vel sapien eu, sollicitudin bibendum nisi. Proin laoreet augue non hendrerit mollis. Vivamus massa ipsum, blandit ac tortor ut, imperdiet volutpat ligula."
          headline="True Evolution"
          tool1="react"
          tool2="js"
          buttontext="TESTTEXT"
        />
        <Image_block
          darkMode={this.state.darkMode}
          image="./Screenshot_1.png"
          name="secondBlock"
          video="1"
          height="80"
          text="This site is sit amet consectetur, adipisicing elit. Incidunt
            enim ad magnam beatae, minus ipsum eius commodi eos quod
            consequuntur. Minima hic autem quas? Sunt hic optio error iste
            fugit."
          headline=".this"
          tool1="react"
          tool2="js"
        />
        <Image_block
          darkMode={this.state.darkMode}
          name="thirdBlock"
          video="1"
          height="80"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            enim ad magnam beatae, minus ipsum eius commodi eos quod
            consequuntur. Minima hic autem quas? Sunt hic optio error iste
            fugit."
          headline="Lorem Ipsum"
          tool1="react"
          tool2="js"
          buttontext="Klicka här"
        />
      </div>
    );
  }
}
