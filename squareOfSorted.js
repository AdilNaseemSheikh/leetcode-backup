/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of 
each number sorted in non-decreasing order.
https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3574/
*/
// solution with O(n) complexity

// let nums = [-4, -1, 0, 3, 10];
let nums = [-7, -3, 2, 3, 11];
// nums = [-7, -3, 2, 3, 11];
nums.forEach((el, i) => {
  nums[i] *= nums[i];
});
const result = [];
let right = 0;
let left = nums.length - 1;
for (let i = right; i <= nums.length - 1; i++) {
  if (nums[right] > nums[left]) {
    result.push(nums[right]);
    right++;
  } else {
    result.push(nums[left]);
    left--;
  }
}
result.reverse();
console.log(result);
