import React from "./web_modules/react.js";
import "./App.css.proxy.js";
import Firework from "./components/Firework.js";
function App({}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "spinner"
  }, "Happy 2020")), /* @__PURE__ */ React.createElement(Firework, {
    style: {position: "absolute", top: 0, left: 0},
    width: window.innerWidth,
    height: window.innerHeight,
    maxParticles: 500
  }));
}
export default App;
