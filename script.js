const arr = [1, 1, 2];
let max = (second = third = Number.MIN_SAFE_INTEGER);
for (let index = 0; index < arr.length; index++) {
  if (arr[index] > max) {
    third = second;
    second = max;
    max = arr[index];
  } else if (arr[index] > second && arr[index] !== max) {
    third = second;
    second = arr[index];
  } else if (arr[index] > third && arr[index] !== second && arr[index]!==max) {
    third = arr[index];
  }
}
console.log(arr);

console.log("first =>", max);

console.log(
  second === Number.MIN_SAFE_INTEGER ? `;( no second so, first = ${max}` : `second => ${second}`
);

console.log(
  third === Number.MIN_SAFE_INTEGER ? `;( no third so, second = ${second}` : `third => ${third}`
);

