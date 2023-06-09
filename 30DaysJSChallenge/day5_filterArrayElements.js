// https://leetcode.com/problems/filter-elements-from-array/description/?utm_campaign=PostD5&utm_medium=Post&utm_source=Post&gio_link_id=a9a5VZr9

// TOPIC: Basic Array Transforms

var filter = function (arr, fn) {
  const res = [];
//   without using filter method
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};
