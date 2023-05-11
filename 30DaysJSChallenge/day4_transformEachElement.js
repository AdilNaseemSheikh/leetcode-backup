// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9

// TOPIC: Basic Array Transforms

// Basic Array Transforms	
var map = function (arr, fn) {
    const res=[];
    //   without using map method
    for(let i = 0;i<arr.length;i++)
        res.push(fn(arr[i],i));
    return res;
};
