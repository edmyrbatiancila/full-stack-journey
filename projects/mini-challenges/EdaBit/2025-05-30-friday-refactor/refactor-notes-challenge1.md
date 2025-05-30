# 📅 Date: May 30, 2025  
## ✅ Challenge: Zip Code Validation

### Edabit Link [Zip Code Validation](https://edabit.com/challenge/Ysk5M8XAscc4fqaAi)

---

#### Challenge Description  
Zip codes consist of 5 consecutive digits.  
Write a function to determine whether the input is a valid zip code.

#### Valid zip code conditions:
- Must contain only numbers (no letters or symbols).  
- Must not contain any spaces.  
- Must be exactly 5 digits in length.

---

#### 💡 My Original Solution:

```js
function isValid(zip) {
	const isStringANumber = isNaN(zip);
	const isThereASpace = zip.includes(" ");
	const isGreaterThanFive = zip.length > 5;

	if (isStringANumber || isThereASpace || isGreaterThanFive) return false;

	return true;
}
```

#### 🔧 Refactored Solution (Regex Approach):

```js
    function isValid(zip) {
        return /^\d{5}$/.test(zip);
    }
```

#### 🚀 Arrow Function Version:

```js
    const isValid = zip => /^\d{5}$/.test(zip);
```


---

#### 💬 Reflection
- What I Learned:

    - Input validation can be simplified and made more robust using regular expressions.

    - isNaN() isn't reliable for checking if a string contains only numbers.

    - Arrow functions and regex can lead to concise and readable code when used appropriately.

- Refactoring Benefits:

    - Improved accuracy: The regex ensures only valid 5-digit numeric strings are accepted.

    - Cleaner and more concise logic.

    - Easier to read and reason about compared to multiple checks.

- Next Steps:

    - Practice regex with more input validation challenges.

    - Explore edge cases for common form inputs (emails, phone numbers, etc.).