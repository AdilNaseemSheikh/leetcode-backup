// https://leetcode.com/problems/array-prototype-last/?utm_campaign=PostD23&utm_medium=Post&utm_source=Post&gio_link_id=GR434na9

Array.prototype.last = function() {
    return this.length===0 ? -1 : this.slice(-1);
};