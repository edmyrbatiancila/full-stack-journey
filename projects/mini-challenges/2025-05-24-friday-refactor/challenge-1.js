/**
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.

 */

// My initial solution:
function squareSum(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] * numbers[i];
    }
    return result;
}

// Refactored solution:
// Using the reduce method to make the code more concise and functional

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

// using arrow function syntax for brevity:
const squareSum = (numbers) => {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] * numbers[i];
    }
}