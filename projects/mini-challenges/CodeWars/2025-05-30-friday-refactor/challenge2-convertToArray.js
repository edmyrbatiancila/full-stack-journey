/**
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */

// My Initial Solution:

function stringToArray(string){

    return string.split(" ");

}


// Refactored Solution(Arrow functtion style):

const stringToArray = (string) => string.split(" ");


