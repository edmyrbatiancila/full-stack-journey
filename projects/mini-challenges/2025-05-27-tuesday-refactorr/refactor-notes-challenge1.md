# 📅 Date: May 27, 2025
## ✅ Challenge: Count by X

### Codewars Link: [Count by X](https://www.codewars.com/kata/5513795bd3fafb56c200049e)

---

**Prompt:**
Create a function with two arguments that returns an array of the first n multiples of x.

**Example:**

- countBy(1, 10) ➝ [1,2,3,4,5,6,7,8,9,10]

- countBy(2, 5) ➝ [2,4,6,8,10]

---

**🧪 My Initial Solution:**
```js
    function countBy(x, n) {
        let z = [];
        let counter = 0;
        
        for (let i = 0; i <= n; i++ ) {
            if (z.length !== n) {
                counter += x;
                z.push(counter);
            } else {
                return z;
            }
        }
    }
```

---

**Review Notes:**
- The loop runs one extra time (i <= n).

- The conditional inside the loop is unnecessary — we already control the number of iterations.

- Using a counter variable is extra when i * x is already predictable.

---

**✅ Refactored Solution:**
```js
    function countBy(x, n) {
        let result = [];
        for (let i = 1; i <= n; i++) {
            result.push(i * x);
        }
        return result;
    }
```

---
**💡 Optional ES6 Version:**
```js
    const countBy = (x, n) => Array.from({ length: n }, (_, i) => (i + 1) * x);
```

---

**💭 Takeaways:**

- Loop control should be simple when the number of iterations is fixed.

- Prefer direct calculations over maintaining external counters when possible.

- Always look for opportunities to simplify logic while keeping readability.

- I learned to use Array.from which is one of the Array reference. This reference have a power to make any string or objects into an array. That is all I know for now, might tackle a little more challenge to better understand this concept. For now I am glad I can able to fix a problem in my own solution.