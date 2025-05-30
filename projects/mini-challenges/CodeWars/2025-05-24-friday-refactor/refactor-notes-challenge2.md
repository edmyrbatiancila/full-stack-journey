# 📅 Date: May 24, 2025
# 🛠️ Focus: Refactor - `numberToString` Function

---

## ✅ Original Code:
```js
function numberToString(num) {
  return num.toString();
}
```

---

## ✅ What It Does:
- Converts an integer into its string representation.

- Uses the toString() method, which is standard and readable.

---

## ✅ Refactored Version:
```js
function numberToString(num) {
  return String(num);
}
```

---

## 💡 Best Practice:

- String(num) is safest if input might be null or undefined.

- .toString() is perfectly fine when you are sure num is a valid number.

- Template literals and concatenation are valid, but less explicit.

---

## 🧠 Key Takeaways:

- Multiple ways to convert number to string — choose based on context.

- Prefer explicit and readable code like .toString() or String().

- Template literals shine when combining variables into strings.

---

## 🧩 Mini Challenges Solved:
- ✅ Codewars: Convert a Number to a String!(https://www.codewars.com/kata/53934feec44762736c00044b)

