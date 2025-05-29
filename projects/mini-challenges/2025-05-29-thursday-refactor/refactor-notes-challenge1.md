# 📅 Date: May 29, 2025
## ✅ Challenge: Reversed Strings

### Codewar link: [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/javascript)


---


**Challenge Descriptions**
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

---

**💡 My Original Solution:**
```js
        function solution(str){
            const strToArr = str.split('');
            
            strToArr.reverse();
            
            return strToArr.join("");
        }
```

**Refactored Solution:**
```js
    function solution(str) {
        return str.split("").reverse().join("");
    }
```

**Arrow function style:**
```js
    const solution = (str) => str.split("").reverse().join("");
```


---


#### 💬 Reflection:

- What I learned:
    - Using JavaScript's array methods .split(), .reverse(), and .join() is an efficient and readable way to reverse strings.

- Refactoring Benefit:
    - The refactored version reduced the number of lines while keeping the logic clear. Using arrow functions makes the code even more concise and modern.

- Next Steps:
    - Practice refactoring with other string or array-based challenges to get comfortable spotting clean-up opportunities.