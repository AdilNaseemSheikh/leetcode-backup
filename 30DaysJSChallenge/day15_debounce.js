// https://leetcode.com/problems/debounce

var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 1000);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello World"); // Logged at t=100ms

function myFn() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 3000);
  });
}

myFn().then((res) => {
  log("Hi there :) ");
  log("Hi there => ");
});
