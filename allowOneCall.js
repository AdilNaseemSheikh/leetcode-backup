// https://leetcode.com/problems/allow-one-function-call/description/

const once = function (fn) {
  let flag = true;
  return function (...args) {
    // solution-1
    if (flag) {
      flag = false;
      return fn(...args);
    }
    // solution-2
    // fn=Function(); // will simply override fn with empty function that returns undefined
  };
};
const fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
