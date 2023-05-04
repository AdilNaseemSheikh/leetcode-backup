const nums = [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
let count = 0,
  prevCount = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 1) {
    count++;
  } else {
    if (count > prevCount) {
      prevCount = count;
    }
    count = 0;
  }
}
console.log(count > prevCount ? count : prevCount);
