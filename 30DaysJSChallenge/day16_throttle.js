////////////////////

// function throttle(cb, delay = 1000) {
//   let shouldWait = false
//   let waitingArgs
//   const timeoutFunc = () => {
//     if (waitingArgs == null) {
//       shouldWait = false
//     } else {
//       cb(...waitingArgs)
//       waitingArgs = null
//       setTimeout(timeoutFunc, delay)
//     }
//   }

//   return (...args) => {
//     if (shouldWait) {
//       waitingArgs = args
//       return
//     }

//     cb(...args)
//     shouldWait = true
//     setTimeout(timeoutFunc, delay)
//   }
// }

// /**
//  * const throttled = throttle(console.log, 100);
//  * throttled("log"); // logged immediately.
//  * throttled("log"); // logged at t=100ms.
//  */

////////////////////

var throttle = function (fn, t) {
  let timer = null;
  let currArg = null;

  return function (...args) {
    if (timer) {
      currArg = args;
    } else {
      fn(...args);
      timer = setTimeout(() => {
        if (currArg) {
          fn(...currArg);
          currArg = null;
        }
        timer = null;
      }, t);
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
