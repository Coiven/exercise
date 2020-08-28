/**
 * 偏应用（partial）
 * @param {*} fn 函数
 * @param  {...any} partialArgs 部分参数
 */
const partial = (fn, ...partialArgs) => {
  const args = partialArgs;

  return (...fullArgs) => {
    let count = 0;
    for (let i = 0; i < args && count < fullArgs.length; i++) {
      if (args[i] === undefined) {
        args[i] = fullArgs[count++];
      }
    }
    return fn.apply(null, args);
  };
};

// test
let delayTenMs = partial(setTimeout, undefined, 10);
delayTenMs(() => console.log("Do X task"));
delayTenMs(() => console.log("Do Y task"));
