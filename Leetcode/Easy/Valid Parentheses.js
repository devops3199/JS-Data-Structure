/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = s.split("");
  const stack = [];

  for (const char of arr) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    } else if (char === "}") {
      if (stack.length === 0 || stack.pop() !== "{") {
        return false;
      }
    } else if (char === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
