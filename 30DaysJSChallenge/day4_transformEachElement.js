/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i)

Please solve it without the built-in Array.map method.
*/
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9

// TOPIC: Basic Array Transforms

var map = function (arr, fn) {
    const res=[];
    //   without using map method
    for(let i = 0;i<arr.length;i++)
        res.push(fn(arr[i],i));
    return res;
};
