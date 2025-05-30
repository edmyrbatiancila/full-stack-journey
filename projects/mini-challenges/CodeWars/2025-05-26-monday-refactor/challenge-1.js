/**
 * Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
 */

// My inial solution:

function positiveSum(arr) {
    let positiveOnes = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveOnes += arr[i];
        }
    }
    return positiveOnes;
}


// refactored solution:
function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}