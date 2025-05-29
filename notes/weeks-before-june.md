# 🗓️ Weeks Before June – Warm-up Study Notes

## 📌 Purpose
This file logs everything I’ve done from the last week of May to prepare for my Full-Stack Web Developer journey (starting June 2025). Includes coding warm-ups, practice challenges, setup progress, and self-reflections.

---

## ✅ Practice Challenges Completed

### Front-end Mentor Challenges:

1. **QR Code Generator UI**
    - My Solution is under folder /projects/FrontEndMentor/Challenge1-QRCodeGenerator/MySolution
        - I used HTML and CSS for this project alone it took me 1 and a half hours.


### 🔹 JavaScript Mini Challenges
1. **Square Sum Function** – practiced `for loop`, squaring values
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

2. **Convert Number to String**
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

3. **Positive Sum Challenge**

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

4. **Perfect Square Checker**

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

5. **Count by X**

    - My Initial Solution:

        ```js
            function countBy(x, n) {
                let z = [];
                let counter = 0;

                for (let i = 0; i <= n; i++>) {
                    if (z.length !== n) {
                        counter += x;
                        z.push(counter);
                    } else {
                        return z;
                    }
                }
            }
        ```

    - Refactored Solution:

        ```js
        function countBy(x, n) {
            let result = [];
            for (let i = 1; i <= n; i++) {
                result.push(i * x);
            }
            return result;
        }

        ```


6. **Convert Hours into Seconds**

    - My Initial Solution:

        ```js
            function howManySeconds(hours) {
                return hours * 3600;
            }
        ```

    - No refactored needed.

7. **Reversed Strings**

    - My Initial Solution:

        ```js
            function solution(str){
                const strToArr = str.split('');
                
                strToArr.reverse();
                
                return strToArr.join("");
            }
        ```

    - Refactore Solution:

        ```js
            function solution(str) {
                return str.split("").reverse().join("");
            }
        ```

    - Arrow function style:

        ```js
            const solution = (str) => str.split("").reverse().join("");
        ```




## 🧠 Reflections

- I often use AI to generate the logic first, then try to understand it line by line.
- ➤ That’s okay for now, but I want to start writing from scratch more often by mid-June.

- My Trello setup is done ✅ — it’s helping me stay organized with my weekly and monthly focus.

- Created a GitHub repo to track my learning: https://github.com/edmyrbatiancila/full-stack-journey

- I went back to read previous challenges that I did specifically in first challenge that I resolved called 'squareSum'. In this challenge I used a for loops which is a very basic one. Now I realized that there is a different approach to that by using reduce which is one of the method for arrays. After using the reduce I only consume one line of code for the logic.

- I read again the 2 previous challenges and I can say that I did improve a little bit about looping, arrays, and conditional. I was able to combine the logic in a function but still I have a lot to learn for the ready made references or methods that can be use that has a multiple logic. For example: reduce(), filter(), map, String(), isInteger() and so on.

- I was able to understand how to convert the string to array by using .split(). for reversing the array you need to use .reverse(), and then to convert the array to string without including the comma you will use .join("")



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

---


## 🗓️ Reflection Note – Wednesday (PHT)
**Date:** 2025-05-28

**🧠 What I’ve Accomplished So Far:**

- Solved multiple challenges on Codewars and Edabit ✅

- Wrote and refined clean JavaScript functions using my own logic 💡

- Started a GitHub repo to document my full-stack developer journey 🌐

- Created and maintained a well-organized Trello study board with structured lists and checklists ✅

**🔍 What I Noticed:**

- I’m getting better at understanding logic after writing or reviewing code.

- I rely on AI initially, but I grasp the logic afterward, which helps solidify my learning.

- Time management is improving with structured scheduling.

**📌 Things to Improve:**

- Try solving more challenges without any assistance first to boost logic development.

- Spend 5–10 minutes reviewing documentation or core concepts weekly.

- Keep my refactor-notes.md updated consistently.

**🧘 Today's Intention:**

- Take a step back, reflect on how far I’ve come, and recharge. Progress doesn’t always mean writing code—it can also mean strengthening my mindset and strategy.