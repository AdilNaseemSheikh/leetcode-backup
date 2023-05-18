var promisePool = async function (functions, n) {
  const pool = [];
  const exec = async function (fn) {
    console.log('pushing ',fn,' to pool');
    await fn();
    pool.pop();
  };

  while (functions.length !== 0) {
    const fn = functions.pop();
    await exec(fn);
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
promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log); // After 900ms
