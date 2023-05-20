var throttle = function (fn, t) {
  let timer = null;
  const argsQue = [];
  return function (...args) {
    if (timer === null) {
      console.log(
        "timer is null to executing the fn and setting time interval"
      );
      fn(...args);
      timer = setInterval(() => {
        if (argsQue.length === 0) {
          clearInterval(timer);
          timer = null;
          return;
        }
        const arg = argsQue.shift();

        fn(...arg);
      }, t);
    } else {
      console.log("pushing");
      argsQue.push(args);
    }
  };
};

let throttled = throttle(console.log, 1000);
throttled("log"); // logged immediately.
throttled("log", "asd"); // logged at t=100ms.
throttled("log", "asdf"); // logged at t=100ms.
throttled("log", "asdfg"); // logged at t=100ms.

throttled = throttle(console.log, 500);

(async function () {
  return new Promise((res, _) => {
    console.log("Sleeping for 5 seconds");
    setTimeout(() => {
      res();
    }, 5000);
  });
})().then((res) => {
  throttled("After timer 1");
  throttled("After timer 2");
  throttled("After timer 3");
});
