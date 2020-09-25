var bind = function(fn, context) {
  if(typeof fn !== 'function') {
    throw new TypeError('not function')
  }
  
  const args = [...arguments].slice(2);
  return function Fn() {
    if(this instanceof Fn) {
      return new fn(...args, ...arguments)
    }else {
      return fn.apply(context, [...args, ...arguments])
    }
  }
}