var timeLimit = function (fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, rej) => setTimeout(rej, t, "Time Limit Exceeded")),
    ]);
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(110).catch(console.log);
// limited(110).catch((e) => console.log(e));
