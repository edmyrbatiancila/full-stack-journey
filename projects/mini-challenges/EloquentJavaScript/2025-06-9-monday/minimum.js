/**
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.

 */

// My own Solution:

const min = (a, b) => {
    return Math.min(a, b);
}

console.log(min(0, 10));

// Refactored Solution using Closure:
function createMinFunction() {
    return (a, b) => (a < b ? a : b);
}

const min2 = createMinFunction();
console.log(min(5, 3));