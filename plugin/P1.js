class P1 {
  constructor() {}

  // compiler 参数来自 webpack-lib 仓库的调用
  apply(compiler) {
    compiler.hooks.beforeEmit.tap("beforeEmit", () => {
      console.log("beforeEmit");
    });
    compiler.hooks.afterEmit.tap("afterEmit", () => {
      console.log("afterEmit");
    });
  }
}

module.exports = P1;
