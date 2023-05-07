/*
Given a function fn, return a new function that is identical to the original function except 
that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/
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
