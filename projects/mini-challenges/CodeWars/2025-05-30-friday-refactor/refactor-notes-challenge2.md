# 📅 Date: May 30, 2025
## ✅ Challenge: Convert a string to an array

### 🔗 CodeWars Link: [Convert a string to an array](https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/javascript)


---


### 🧩 Challenge Description 
Write a function to split a string and convert it into an array of words.



---


### 💡 My Original Solution
```js
    function stringToArray(string){

        return string.split(" ");

    }
```

### 🔁 Refactored Solution (Arrow Function Style)
```js
    const stringToArray = (string) => string.split(" ");
```

---


#### 💬 Reflection:

- What I learned:
    - I already had a solid understanding of how to convert a string to an array using .split(" "). This challenge reinforced the importance of reading documentation to better understand built-in JavaScript methods — which helps write clean, modern code.

- Refactoring Benefit:
    - Since my initial solution was correct and efficient, I refactored it to an arrow function for a more concise, modern look. The logic remains the same, but it aligns with ES6+ practices.

- Next Steps:
    - I’ll continue solving mini-challenges and gradually rely less on pre-built methods when appropriate — to strengthen my problem-solving skills and improve algorithmic thinking.