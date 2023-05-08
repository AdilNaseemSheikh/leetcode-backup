// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// https://leetcode.com/problems/create-hello-world-function/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR

// TOPIC: Closure
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
f(); // "Hello World"
