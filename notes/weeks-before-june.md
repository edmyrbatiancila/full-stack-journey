# 🗓️ Weeks Before June – Warm-up Study Notes

## 📌 Purpose
This file logs everything I’ve done from the last week of May to prepare for my Full-Stack Web Developer journey (starting June 2025). Includes coding warm-ups, practice challenges, setup progress, and self-reflections.

---

## ✅ Practice Challenges Completed

### 🔹 JavaScript Mini Challenges
- **Square Sum Function** – practiced `for loop`, squaring values
    - My Initial Solution:

        ```js
        function squareSum(numbers) {
            let result = 0;
            for (let i = 0; i < numbers.length; i++) {
            numbers[i] **= 2;
            result += numbers[i];
            }
            return result;
        }
        ```

    - Refactored Solution:
        ```js
        function squareSum(numbers){
            return numbers.reduce((sum, num) => sum + num ** 2, 0);
        }
        ```

    - ✅ Learned: Looping, mutation caution

- **Convert Number to String**
    - My Initial Solution:

        ```js
        function numberToString(num) {
            return num.toString();
        }
        ```

    - Refactored Solution:

        ```js
        function numberToString(num) {
            return String(num);
        }

    - Learned: Type casting basics

- **Positive Sum Challenge**

    - My Initial Solution:

        ```js
        function positiveSum(arr) {
            let positiveOnes = 0;
            
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    positiveOnes += arr[i];
                }
            }
            return positiveOnes;
        }
        ```

    - Refactored Solution:

        ```js
        function positiveSum(arr) {
            return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
        }
        ```

- **Perfect Square Checker**

    - My Initital Solution:

        ```js
        var isSquare = function(n){
            let squareBuildingBlocks = Math.round(Math.sqrt(n));
            
            if (squareBuildingBlocks === 0) {
                return true;
            } else if (squareBuildingBlocks * squareBuildingBlocks === n) {
                return true; 
            } else {
                return false;
            }
            
        }

    - Refactored Solution:

        ```js
        var isSquare = function(n){
            return Number.isInteger(Math.sqrt(n));
        }
        ```



## 🧠 Reflections

- I often use AI to generate the logic first, then try to understand it line by line.
- ➤ That’s okay for now, but I want to start writing from scratch more often by mid-June.

- My Trello setup is done ✅ — it’s helping me stay organized with my weekly and monthly focus.

- Created a GitHub repo to track my learning: https://github.com/edmyrbatiancila/full-stack-journey

- I went back to read previous challenges that I did specifically in first challenge that I resolved called 'squareSum'. In this challenge I used a for loops which is a very basic one. Now I realized that there is a different approach to that by using reduce which is one of the method for arrays. After using the reduce I only consume one line of code for the logic.



## 🔧 Setup Progress
- Trello Board: ✅ Created

- GitHub Repo: ✅ Pushed initial commits

- Markdown logs started




## 🔗 Helpful Resources I Used
- [Codewars Challenges](https://www.codewars.com/dashboard)

- [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [GitHub Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)




## 🏁 Goal for June 1st
- Begin Week 1: JavaScript Core Deep Dive

- Commit daily to notes/ or study-focus-rotation/week-01/