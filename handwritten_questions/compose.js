/**
 * 组合（compose）
 * 从右到左执行
 * @param  {...any} fns 组合的函数列表
 */
const compose = (...fns) => (value) =>
  fns.reverse().reduce((acc, fn) => fn(acc), value);

// test
let splitIntoSpaces = (str) => str.split(" "); // 分割成数组
let count = (array) => array.length; // 计算长度

const countWords = compose(count, splitIntoSpaces);

countWord("hello world"); // 2
