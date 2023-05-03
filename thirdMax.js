/*
Given an integer array nums, return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.
https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3231/
*/
const nums = [2,2,3,1];
let max = (second = third = Number.MIN_SAFE_INTEGER);
for (let index = 0; index < nums.length; index++) {
  if (nums[index] > max) {
    third = second;
    second = max;
    max = nums[index];
  } else if (nums[index] > second && nums[index] !== max) {
    third = second;
    second = nums[index];
  } else if (
    nums[index] > third &&
    nums[index] !== second &&
    nums[index] !== max
  ) {
    third = nums[index];
  }
}
third === Number.MIN_SAFE_INTEGER ? console.log(max) : console.log(third);
