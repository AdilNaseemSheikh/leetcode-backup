/*Given an integer n, return a counter function. This counter function initially returns n and
then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */
// https://leetcode.com/problems/counter/?utm_campaign=PostD2&utm_medium=Post&utm_source=Post&gio_link_id=xogkVqBo

// TOPIC: Closure

var createCounter = function (n) {
    return function () {
      return n++;
    };
  };
  
  const counter = createCounter(10);
  counter(); // 10
  counter(); // 11
  counter(); // 12
  