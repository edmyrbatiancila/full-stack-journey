# 📅 Date: May 24, 2025
# 🛠️ Focus: Refactor - `squareSum` Function

---

## ✅ Original Code:
```js
function squareSum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] **= 2;
    result += numbers[i];
  }
  return result;
}
```

---

## 🚫 Issues Identified:
- Mutates the input array (`numbers[i] **= 2`) which can lead to bugs or unexpected behavior elsewhere in the app if the original data is reused.
- Not using modern JavaScript idioms (e.g., `reduce`, `for...of`).
- Slightly verbose.

---

## ✅ Refactored Version:
```js
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}
```

---

## 💡 Why This is Better:
- **Pure function**: does not modify input.
- **Cleaner** and more **concise**.
- Leverages **functional programming** practices.
- Easier to test and reuse.

---

## 🧠 Key Takeaways:
- Avoid mutating inputs unless you have a specific reason.
- `reduce` is powerful for aggregate operations like summing.
- Writing clean and predictable code is more important than just making it work.

---

## 🧩 Mini Challenges Solved:
- ✅ Codewars: [Sum of Squares](https://www.codewars.com/kata/515e271a311df0350d00000f)

