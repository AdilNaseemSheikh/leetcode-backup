// https://leetcode.com/problems/debounce

var debounce = function (fn, t) {
  let timer;
  const setTimer = function (args) {
    return setTimeout(() => {
      console.log("executing fn");
      fn(...args);
      timer = null;
    }, t);
  };
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      console.log("canceling timer and setting new one");
      timer = setTimer(args);
    } else {
        console.log('Setting brand new Timer');
      timer = setTimer(args);
    }
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

// setting brand new timer
// canceling timer and setting new one
// canceling timer and setting new one
// executing fn
// Hello World

// setting brand new timer
// canceling timer and setting new one
// executing fn
// Hi there =>