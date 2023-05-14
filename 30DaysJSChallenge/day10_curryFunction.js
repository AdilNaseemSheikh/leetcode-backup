/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  let myArgs = [];
  return function curried(...args) {
    myArgs.push(...args);
    if (myArgs.length === fn.length) {
      const res = fn(...myArgs);
      myArgs = [];
      return res;
    } else {
      return curried.bind(myArgs);
    }
  };
};

function sum(a, b, c, d) {
  return a + b + c + d;
}
const csum = curry(sum);
console.log(csum(1)(2)(3)(4)); // 3
