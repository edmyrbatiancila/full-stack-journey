/**
Valid Zip Code

Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

Must only contain numbers (no non-digits allowed).
Must not contain any spaces.
Must not be greater than 5 digits in length.
Examples
isValid("59001") ➞ true

isValid("853a7") ➞ false

isValid("732 32") ➞ false

isValid("393939") ➞ false

 */

// My Initial Solution:

function isValid(zip) {
	const isStringANumber = isNaN(zip);
	const isThereASpace = zip.includes(" ");
	const isGreaterThanFive = zip.length > 5;
	
	if (isStringANumber || isThereASpace || isGreaterThanFive) return false;
	
	return true;
}

// Refactored Solution:

function isValid(zip) {
    return /^\d{5}$/.test(zip);
}

// Arrow Function style:

const isValid = (zip) => /^\d{5}$/.test(zip);