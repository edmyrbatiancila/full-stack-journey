/**
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

 */

// My Initial Solution:

function solution(str){
    const strToArr = str.split('');
    
    strToArr.reverse();
    
    return strToArr.join("");
}


// Refactored Solution:

function solution(str) {
    return str.split("").reverse().join("");
}

// Arrow function style:

const solution = (str) => str.split("").reverse().join("");
