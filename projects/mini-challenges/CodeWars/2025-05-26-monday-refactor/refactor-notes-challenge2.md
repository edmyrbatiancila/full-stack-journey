## [Codewars] You're a Square! (7 kyu)
✅ Solved by rounding the square root and comparing its square with the input number.
🌀 Refactored using `Number.isInteger(Math.sqrt(n))` for cleaner logic.

---

## Final Version:
```js
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}
```

## 🧠 Key Takeaways:

- Math.sqrt() gives the square root.

- Number.isInteger() checks if a value is a whole number.