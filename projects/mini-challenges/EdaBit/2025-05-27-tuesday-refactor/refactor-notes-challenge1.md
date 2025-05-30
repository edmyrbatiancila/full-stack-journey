# 📅 Date: May 27, 2025
## ✅ Challenge: Convert Hours into Seconds

### edaBit Link: [Convert Hours into Seconds](https://edabit.com/challenge/6AnQqiEjkJdZrWhPS)

---

**Original Task:**
Write a function that converts hours into seconds.
📌 Example Inputs and Outputs:
```js
    howManySeconds(2) ➞ 7200
    howManySeconds(10) ➞ 36000
    howManySeconds(24) ➞ 86400
```

---

**💡 My Original Solution:**
```js
    function howManySeconds(hours) {
        return hours * 3600;
    }
```

---

**✅ Why this works:**

- Multiplies the number of hours by 3600 (60 seconds × 60 minutes).

- Uses a direct return, making the code clean and efficient.

- ✅ No unnecessary logic or loops.

---

**✨ Optional Improvements:**
1. Arrow Function Version (ES6+):
```js
    const howManySeconds = hours => hours * 3600;
```
2. With Input Validation (Optional at beginner level):
```js
    function howManySeconds(hours) {
        if (typeof hours !== "number" || hours < 0) return 0;
        return hours * 3600;
    }
```

---

**✅ Final Thoughts:**

- No refactor needed — the function is already clean and best practice!