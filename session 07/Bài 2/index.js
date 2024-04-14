"use strict";
let numbers2 = [1, 2, 3, 11, 32, 4, 23];
numbers2.forEach((item, index, arr) => {
    if (item > 2 && item < 5) {
        console.log(item);
    }
});
