var insertion = (arr) => {
  const len = arr.length;
  for(let i = 1; i < len; i++) {
    let left = 0, right = i - 1, key = arr[i];
    while(left <= right) {
      let middle = ~~((right + left) / 2);
      if(key > arr[middle]) {
        left = middle + 1;
      }else {
        right = middle - 1;
      }
    }

    for(let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    arr[left] = key;
  }

  return arr;
}

// test
insertion([5, 6, 2, 9, 4, 3, 1])