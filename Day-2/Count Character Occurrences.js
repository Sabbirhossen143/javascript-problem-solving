function countChar(str, char) {
  let count = 0;

  for (let current of str) {
    if (current === char) {
      count++;
    }
  }

  return count;
}

console.log(countChar("banana", "a"));
// 3