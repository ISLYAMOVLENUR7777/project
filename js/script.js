'use strict';
/* 
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b) );
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
 */

/* 
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    arr.forEach(item, index, arr) => { 
        if (item >= 1 && item <= 4) {
            arr.splice(item,1);
        } 
    }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
 */
/* 
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            } else {
                arr.splice(i, 1);
            }
    }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
 */


/* 
let arr = [5, 2, 1, -10, 8];

arr.sort()
    .reverse();

console.log(arr);
 */
/* 
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
console.log(arr);
 */
/* 
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let arrSort = arr.slice();
    return arrSort.sort();
}

let sorted = copySorted(arr);

console.log( sorted );
console.log(arr);
 */
/* 
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log( sorted );
console.log( arr );
 */




function calculate(str) {
    let arr = str.split('+');
        arr = arr.join();
        arr = arr.spread();
    
    //let result = arr.reduce((sum, current) => sum + current, 0);
    //console.log(result);
    return typeof arr;
}

console.log( calculate("3 + 7") );