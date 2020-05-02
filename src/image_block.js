import "./image_block.module.css";
import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default class Image_block extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    // this.idblock1 = React.createRef();
    this.state = {
      videoLoaded: false,
      buttonEffect: null,
      media: 2,
    };
  }

  componentDidMount() {
    setInterval(() => {}, 1000);
    const dataIsLoaded = () => {
      this.setState({
        videoLoaded: true,
      });
    };
    const buttonEffect = () => {
      this.setState({ buttonEffect: true });
    };

    const buttonEffectOut = () => {
      this.setState({ buttonEffect: false });
    };

    this.video.current.addEventListener("loadeddata", dataIsLoaded.bind(this));
    this.video.current.addEventListener("mouseover", () => {
      this.setState({ buttonEffect: true });
    });
    this.video.current.addEventListener("mouseout", buttonEffectOut.bind(this));
  }

  render() {
    return (
      <Element className="contentMain" name={this.props.id}>
        <div
          className="sections section1"
          style={{
            height: `${this.props.height}vh`,
            backgroundImage:
              "url(https://www.lg.com/se/images/TV/features/TV-UHD-UM71-04-Quad-Core-Processor-Desktop.jpg)",
          }}
        >
          <div className="gridcontainer">
            <div className={`item ${this.props.tool1}`}></div>
            <div className={`item ${this.props.tool2}`}></div>
            <div className={`item ${this.props.tool3}`}></div>
          </div>

          <div className="hoverContainer" ref={this.video}></div>
        </div>
        <div className="sections section2">
          <div className="calmContainer">
            <h1>{this.props.headline}</h1>
            <p className="sec2p">{this.props.text}</p>
            <button
              className={this.state.buttonEffect ? "buttonAttention" : " "}
            >
              <p className="buttontext">{this.props.buttontext}</p>
            </button>
          </div>
        </div>
      </Element>
    );
  }
}
