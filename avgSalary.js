const salary = [4000,3000,1000,2000];
let max = (min = salary[0]);
let avg = 0;
for (let i = 0; i < salary.length; i++) {
  if (salary[i] > max) {
    max = salary[i];
  }
  if (salary[i] < min) {
    min = salary[i];
  }
  avg += salary[i];
}
const n = salary.length - 2;
console.log(`max => ${max}, min => ${min}`);
avg-=max;
avg-=min;
console.log('avg => ',avg);
console.log('n => ',n);
