import styles from "./image_block.module.css";
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
    this.expandedSwitch = this.expandedSwitch.bind(this);
    // this.idblock1 = React.createRef();
    this.state = {
      videoLoaded: false,
      buttonEffect: null,
      media: 2,
      isExpanded: false,
    };
  }

  expandedSwitch() {
    if (this.state.isExpanded == false) {
      this.setState({
        isExpanded: true,
      });
      scroller.scrollTo(this.props.name + "section2", {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuint",
        offset: 50,
      });
      console.log(this.state.isExpanded);
    } else {
      this.setState({
        isExpanded: false,
      });
      scroller.scrollTo(this.props.name, {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuint",
        offset: 50,
      });
    }
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
      <div className={styles.contentMain} name={this.props.name}>
        <div
          className={styles.section1}
          style={{ height: `${this.props.height}vh` }}
        >
          <div className={styles.gridcontainer}>
            <div className={`item ${this.props.tool1}`}></div>
            <div className={`item ${this.props.tool2}`}></div>
            <div className={`item ${this.props.tool3}`}></div>
          </div>

          <div className={styles.hoverContainer} ref={this.video}></div>
        </div>
        <div
          className={`${styles.section2} ${
            this.state.isExpanded ? styles.expanded : " "
          }`}
          onClick={this.expandedSwitch}
          name={this.props.name + "section2"}
        >
          <div className={styles.calmContainer}>
            <h1>{this.props.headline}</h1>
            <p className={styles.sec2p}>{this.props.text}</p>
            <button
              className={this.state.buttonEffect ? "buttonAttention" : " "}
              className={styles.goToAppButton}
            >
              <p className={styles.buttontext}>{this.props.buttontext}</p>
            </button>
            <button
              onClick={this.expandedSwitch}
              className={styles.expandButton}
              name="knapp"
              // to="section2"
              smooth={true}
              duration={1000}
            >
              expand
            </button>
          </div>
        </div>
      </div>

      // <Element className="contentMain" name={this.props.id}>
      //   <div
      //     className="sections section1"
      //     style={{
      //       height: `${this.props.height}vh`,
      //       backgroundImage:
      //         "url(https://www.lg.com/se/images/TV/features/TV-UHD-UM71-04-Quad-Core-Processor-Desktop.jpg)",
      //     }}
      //   >
      //     <div className="gridcontainer">
      //       <div className={`item ${this.props.tool1}`}></div>
      //       <div className={`item ${this.props.tool2}`}></div>
      //       <div className={`item ${this.props.tool3}`}></div>
      //     </div>

      //     <div className="hoverContainer" ref={this.video}></div>
      //   </div>
      //   <div className="sections section2">
      //     <div className="calmContainer">
      //       <h1>{this.props.headline}</h1>
      //       <p className="sec2p">{this.props.text}</p>
      //       <button
      //         className={this.state.buttonEffect ? "buttonAttention" : " "}
      //       >
      //         <p className="buttontext">{this.props.buttontext}</p>
      //       </button>
      //     </div>
      //   </div>
      // </Element>
    );
  }
}
