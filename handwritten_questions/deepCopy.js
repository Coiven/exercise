const deepCopy = (obj) => {
  let result = Object.create(null);
  let keys = Object.keys(obj);
  keys.forEach(key => {
    let val = obj[key];
    let type = typeof val;
    switch(type) {
      case 'object': 
        result[key] = deepCopy(val);
        break;
      default:
        result[key] = val;
        break;
    }
  })

  return result;
}

// test
const temp = deepCopy({
  a: '123',
  b: 123,
  c: () => 123,
  d: {
    a: 1,
    b: 2
  }
})