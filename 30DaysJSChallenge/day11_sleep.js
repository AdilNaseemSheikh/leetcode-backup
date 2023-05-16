// https://leetcode.com/problems/sleep/

// TOPIC: Promise

const sleep = async function (millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, millis);
  });
};
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));
