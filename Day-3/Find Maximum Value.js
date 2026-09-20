function findMax(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findMax([3, 1, 7, 2, 9]));
// 9