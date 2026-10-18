function isValidParentheses(str) {
  let stack = [];
  let pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let ch of str) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("([)]"));   // false