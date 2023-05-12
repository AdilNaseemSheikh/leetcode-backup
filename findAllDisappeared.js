// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3270/


// solution with O(n) complexity
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const nums = [1, 1];
const result = [];
const obj1 = {};

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
