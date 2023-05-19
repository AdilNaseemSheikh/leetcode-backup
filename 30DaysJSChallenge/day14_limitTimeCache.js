// https://leetcode.com/problems/cache-with-time-limit
const obj = {
  1: "asd",
  as: "asdf",
  2: undefined,
  _deleteKey(key, duration) {
    setTimeout(() => {
      this[key] = undefined;
    }, duration);
  },
  set(key, value, duration) {
    if (this[key] != undefined) {
      this[key] = value;
      this._deleteKey(key, duration);
      return true;
    }
    return false;
  },
  get(key) {
    return this[key] || -1;
  },
};

obj.set("name", "Adil", 5000);


for (let prop in obj) {
  if (obj[prop] != undefined && isFinite(+prop)) console.log(prop);
}
