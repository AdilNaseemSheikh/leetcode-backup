var throttle = function (fn, t) {
  let timer = null;
  let currArg = null;
  const timerFn = () => {
    if (currArg) {
      fn(...currArg);
      timer = setTimeout(timerFn, t);
      currArg = null;
    } else {
      timer = null;
    }
  };

  return function (...args) {
    if (timer) {
      currArg = args;
    } else {
      fn(...args);
      timer = setTimeout(timerFn, t);
    }
  };
};

let throttled = throttle(console.log, 1000);
throttled("log");
throttled("log", "asd");
throttled("log", "asdf");
throttled("logasd");
throttled("logasdjk");
throttled("logasdfghkjkl;");
