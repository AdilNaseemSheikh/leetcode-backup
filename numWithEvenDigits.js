const nums = [122, 342, 9876, 23, 1];
let evens = 0;
// js solution
// for (let index = 0; index < nums.length; index++) {
//   if (`${nums[index]}`.length % 2 === 0) evens++;
// }

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  let count = 0;
  do {
    num-=(num%=10);
    num /= 10;
    count++;
  } while (num !== 0);
  if (count % 2 === 0) evens++;
}

console.log(evens);
