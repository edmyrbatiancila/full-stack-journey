## [Codewars] Sum of Positive (8 kyu)
✅ First solved using a `for` loop — clear and understandable.
🌀 Refactored with `.filter()` + `.reduce()` for a modern, expressive style.

Lessons:
- Use `filter()` to select items based on a condition
- Use `reduce()` to sum up values efficiently

Final one-liner:
```js
arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);