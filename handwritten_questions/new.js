/**
 * 手写 new
 * 1. 创建空对象
 * 2. 链接到原型
 * 3. 利用构造函数绑定 this
 * 4. 返回新对象
 */
function createNew() {
  let obj = Object.create(null);
  let [constructor, ...args] = [].slice.call(arguments);

  obj.__propto__ = constructor.proptype;

  let result = constructor.apply(obj, args);
  return typeof result === "object" ? result : obj;
};

// test

function Fn(a, b) {
  this.a = a;
  this.b = b;
}

let obj = createNew(Fn, "hello", 111);
console.log(obj.a, peo.b);
