// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  text-align: center;\n  position: relative;\n}\n\n.App p {\n  margin: 0.4rem;\n  font-size: 10rem;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\nbody {\n  perspective: 500px;\n}\n\n.spinner {\n  text-align: center;\n  animation-name: spin, depth;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-duration: 10s;\n}\n\n@keyframes spin {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(-180deg);\n  }\n}\n\n@keyframes depth {\n  0% {\n    text-shadow: 0 0 black;\n  }\n  25% {\n    text-shadow: 1px 0 black, 2px 0 black, 3px 0 black, 4px 0 black, 5px 0 black;\n  }\n  50% {\n    text-shadow: 0 0 black;\n  }\n  75% {\n    text-shadow: -1px 0 black, -2px 0 black, -3px 0 black, -4px 0 black,\n      -5px 0 black;\n  }\n  100% {\n    text-shadow: 0 0 black;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}