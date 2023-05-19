https://leetcode.com/problems/promise-pool

var promisePool = async function (functions, n) {
  const pool = [];
  const exec = async function (fn) {
    console.log("pushing ", fn, " to pool");
    pool.push(fn);
    await fn();
    const poped = pool.pop();
    console.log(poped, " was poped");
  };

  while (functions.length !== 0) {
    if (pool.length < n) {
      const fn = functions.pop();
      exec(fn);
    } else {
      console.log("Pool is currently full");
    }
  }

  //   for (let i = 0; i < functions.length; i++) {
  //     const fn = functions[i];
  //     if (pool.length < n) {
  //       pool.push(i);
  //       exec(fn);
  //     }
  //     else{
  //         i--;
  //     }
  //   }
};

const sleep = (t) => new Promise((res) => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 2).then(console.log); // After 900ms
