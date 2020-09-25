var myApply = function (fn, context) {
  if(typeof fn !== 'function') {
    throw new TypeError('not function')
  };
  context = context || window;
  context.fn = fn;
  const args = [...arguments][2] || [];
  const result = context.fn(...args)
  delete context.fn;
  return result;
}