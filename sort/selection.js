var selection = (arr) => {
  let min, len = arr.length;
  for(let i = 0; i < len - 1; i++) {
    min = i;
    for(let j = i + 1; j < len; j++) {
      if(arr[j] < arr[min]) {
        [arr[j], arr[min]] = [arr[min], arr[j]];
      }
    }
  }
  return arr;
}

// test
selection([5, 6, 2, 9, 4, 3, 1])