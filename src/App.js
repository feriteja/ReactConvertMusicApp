import React, { Component, createRef } from "react";

import "./App.css";
import Bubble from "./sounds/bubbles.mp3";
import Clay from "./sounds/clay.mp3";
import Confetti from "./sounds/confetti.mp3";
import Glimmer from "./sounds/glimmer.mp3";
import Moon from "./sounds/moon.mp3";
import Ufo from "./sounds/ufo.mp3";

const colors = [
  "#60d394",
  "#d36060",
  "#c060d3",
  "#d3d160",
  "#606bd3",
  "#60c2d3",
];

// const Visual = () => (
//   <div className="visual">
//     <div
//       style={{
//         backgroundColor: "#fa0",
//         height: 60,
//         width: 60,
//         animation: "jump 1s ease",
//       }}
//     />
//   </div>
// );
export default class App extends Component {
  constructor(props) {
    super(props);
    this.SelectMusic = createRef();
    this.state = { colorNumber: 0 };
    this.nodeElement = document.getElementsByClassName("visual");
  }

  createBubble = (index) => {
    const bubble = document.createElement("div");
    this.nodeRefCoba.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", () => {
      this.nodeRefCoba.removeChild(bubble);
    });
  };

  componentDidMount() {
    console.log(this.nodeElement);
    const nodeList = this.SelectMusic.current.childNodes;

    // const newElement = document.createElement("span");
    // newElement.innerText = "portal element";

    // this.nodeRefCoba.appendChild(newElement);

    nodeList.forEach((pads, index) => {
      pads.addEventListener("click", () => {
        // console.log(pads.childNodes[0]);
        this.setState({ colorNumber: index });
        pads.childNodes[0].currentTime = 0;
        pads.childNodes[0].play();
        this.createBubble(index);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Music App (Converted to ReactJs) </h1>
          <p>
            original source
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=2VJlzeEVL8A&t=7s"
            >
              here
            </a>
          </p>
        </header>
        <div className="visual" ref={(node) => (this.nodeRefCoba = node)}></div>
        <div className="pads" ref={this.SelectMusic}>
          <div className="pad1">
            <audio className="pad1">
              <source src={Bubble} />
            </audio>
          </div>
          <div className="pad2">
            <audio src={Clay}></audio>
          </div>
          <div className="pad3">
            <audio src={Confetti}></audio>
          </div>
          <div className="pad4">
            <audio src={Glimmer}></audio>
          </div>
          <div className="pad5">
            <audio src={Moon}></audio>
          </div>
          <div className="pad6">
            <audio src={Ufo}></audio>
          </div>
        </div>
      </div>
    );
  }
}
