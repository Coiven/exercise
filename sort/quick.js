var quick = (arr) => {
  if(arr.length < 2) return arr;
  let left = [], right = [];
  let midIndex = ~~(arr.length / 2);
  let mid = arr.splice(midIndex, 1)[0];
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if(temp < mid) {
      left.push(temp);
    }else {
      right.push(temp);
    }
  }
  return quick(left).concat([mid], quick(right));
}

// test
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quick(arr));

// in-place quickSort
var quick1 = (arr, l, r) => {
  if(l > r) return;

  const len = arr.length;
  l = l || 0;
  r = r || len - 1;

  const pivot = arr[l];
  let lIndex = l;
  let rIndex = r;

  while(lIndex !== rIndex) {
    while(arr[rIndex] >= pivot && lIndex < rIndex) {
      rIndex--;
    }

    while(arr[lIndex] <= pivot && lIndex < rIndex) {
      lIndex++;
    }

    if(lIndex < rIndex) {
      [arr[lIndex], arr[rIndex]] = [arr[rIndex], arr[lIndex]];
    }
  }

  arr[l] = arr[lIndex];
  arr[lIndex] = pivot;

  quick1(arr, l, lIndex - 1);
  quick1(arr, lIndex + 1, r);

  return arr;
}

// test
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quick1(arr));