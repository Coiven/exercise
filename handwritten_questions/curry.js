/**
 * 柯里化 (curry)
 * @param {*} fn
 * @param {*} num attribute num
 */
const curry = (fn, num) => {
  if (typeof fn !== "function") {
    throw Error("No function provided");
  }

  const curriedFn = (...args) => {
    // 未达到触发条件，继续收集参数
    // 触发条件可配置 fn.length > args.length
    if (args.length < num) {
      return function () {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };

  return curriedFn;
};


// test
const multiply = (...args) => args.reduce((a, b) => a * b);

const _multiply = curry(multiply, 3);

var a = _multiply(1, 2, 3);
var b = _multiply(1, 2)(3);
var c = _multiply(1)(2)(3);

console.log(a === b);
console.log(a === c);

export default curry;
