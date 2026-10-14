function findMissing(arr, n) {
  let expected = n * (n + 1) / 2;
  let actual = 0;

  for (let num of arr) {
    actual += num;
  }

  return expected - actual;
}

console.log(findMissing([1, 2, 4, 5], 5));
// 3