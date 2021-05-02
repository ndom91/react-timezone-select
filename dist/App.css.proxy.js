// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  padding-top: 25px;\n  width: 500px;\n  margin: 0 auto;\n}\n\n.header * {\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.author {\n  text-decoration: none;\n  font-size: 0.8rem;\n  padding-top: 10px;\n  color: #666;\n}\n\n.select-wrapper {\n  margin-top: 15px;\n  width: 500px;\n  max-width: 90vw;\n  text-align: left;\n}\n\n.code {\n  background-color: #efefef;\n\n  width: auto;\n  margin-top: 20px;\n  padding: 10px;\n\n  line-height: 2;\n  white-space: pre-wrap;\n\n  font-family: monospace;\n  font-weight: 100;\n  font-size: 1.2rem;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}