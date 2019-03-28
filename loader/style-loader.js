const less = require("less");

// 用JSON.stringify去掉样式换行问题

function loader(source) {
  let style = `
    const style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `;
  return style;
}

module.exports = loader;
