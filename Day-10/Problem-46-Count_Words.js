function wordCount(sentence) {
  let result = {};

  for (let word of sentence.split(/\s+/)) {
    if (word) {
      result[word] = (result[word] || 0) + 1;
    }
  }

  return result;
}

console.log(wordCount("the cat sat on the mat"));
// { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }