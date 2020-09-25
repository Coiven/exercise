var instanceOf = (left, right) => {
  let leftValue = left.__proto__;
  let rightValue = right.prototype;

  console.log(leftValue, rightValue);

  while(true) {
    if(leftValue === null) return false;

    if(leftValue === rightValue) {
      return true
    }

    leftValue = leftValue.__proto__;
  }
}

// test
instanceOf([], Array);
instanceOf({}, Object);