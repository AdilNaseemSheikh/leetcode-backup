// https://leetcode.com/problems/memoize/?utm_campaign=PostD9&utm_medium=Post&utm_source=Post&gio_link_id=nRbADVd9

function memoize(fn) {
    const cacheObj = {};
   return function (...args) {
     const params = JSON.stringify(args);
     if (cacheObj[params]!==undefined) {
       return cacheObj[params];
     }
     const res = fn(...args);
     cacheObj[params] = res;
     return res;
   };
 }

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedFn([0, 0]); // 5
memoizedFn([0, 0]); // 5
// memoizedFn([]); // 5
console.log(callCount); // 1
