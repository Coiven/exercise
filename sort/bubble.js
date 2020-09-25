var bubble = (arr) => {
  const len = arr.length;
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - i -1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr;
}

// test
bubble([5, 6, 2, 9, 4, 3, 1])

// 双指针
var bubble1 = (arr) => {
  let [low, high] = [0, arr.length - 1];
  while(low < high) {
    for(let i = low; i < high; i++) {
      if(arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
      }
    }
    --high;
    for(let i = high; i > low; i--) {
      if(arr[i] < arr[i - 1]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
      }
    }
    ++low;
  }
  return arr;
}

// test
bubble1([5, 6, 2, 9, 4, 3, 1])