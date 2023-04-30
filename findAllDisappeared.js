const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const nums = [1, 1];
const result = [];
const obj1 = {};

// solution 1

// for (let i = 0; i < nums.length; i++) {
//   obj1[`${i + 1}`] = 0;
// }

// for (let i = 0; i < nums.length; i++) {
//   obj1[nums[i]] = ++obj1[nums[i]];
// }

// for (let i = 0; i < nums.length; i++) {
//   if (obj1[i + 1] === 0) {
//     result.push(i + 1);
//   }
// }

// solution 2

for (let i = 0; i < nums.length; i++) {
  obj1[nums[i]] = true;
}
console.log(obj1);
for (let i = 0; i < nums.length; i++) {
  if (!obj1[i + 1]) {
    result.push(i + 1);
  }
}

console.log(result);
