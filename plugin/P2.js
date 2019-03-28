class P2 {
  constructor() {}

  apply(compiler) {
    compiler.hooks.beforeCompile.tap("beforeCompile", () => {
      console.log("beforeCompile");
    });
    compiler.hooks.afterCompile.tap("afterCompile", () => {
      console.log("afterCompile");
    });
  }
}

module.exports = P2;
