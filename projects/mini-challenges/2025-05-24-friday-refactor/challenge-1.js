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