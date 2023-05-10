/*
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.
*/
// https://leetcode.com/problems/array-reduce-transformation/description/?utm_campaign=PostD6&utm_medium=Post&utm_source=Post&gio_link_id=nPN45jD9

// TOPIC: Basic Array Transforms

// solution 1
// var reduce = function (nums, fn, init) {
//   if (nums.length === 0) return init;
//   let val = fn(init, nums[0]);
//   for (let i = 1; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }
//   return val;
// };

// solution 2
var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
