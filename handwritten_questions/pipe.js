/**
 * 管道（pipe）
 * 从左到右执行
 * @param  {...any} fns 组合的函数列表
 */
const compose = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

// test
let splitIntoSpaces = (str) => str.split(" "); // 分割成数组
let count = (array) => array.length; // 计算长度

const countWords = compose(splitIntoSpaces, count);

countWord("hello world"); // 2
