const less = require("less");

function loader(source) {
  let css = "";
  less.render(source, (err, c) => {
    css = c.css;
  });
  css = css.replace(/\n/g, "\\n"); // eval 遇见\n会有问题
  return css;
}

module.exports = loader;
