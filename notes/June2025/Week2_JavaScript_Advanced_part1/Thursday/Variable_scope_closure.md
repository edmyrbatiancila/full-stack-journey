# [Variable scope, closure](https://javascript.info/closure#lexical-environment)

## Code blocks

- If a variable is declared inside a code block {...}, it’s only visible inside that block.

- For Example:

```js
    {
        // do some job with local variables that should not be seen outside

        let message = "Hello"; // only visible in this block

        alert(message); // Hello
    }

    alert(message); // Error: message is not defined
```

- We can use this to isolate a piece of code that does its own task, with variables that only belong to it:

```js
    {
        // show message
        let message = "Hello";
        alert(message);
    }

    {
        // show another message
        let message = "Goodbye";
        alert(message);
    }
```

- ⚠ There’d be an error without block 

    - Please note, without separate blocks there would be an error, if we use let with the existing variable name:

    ```js
    // show message
        let message = "Hello";
        alert(message);

        // show another message
        let message = "Goodbye"; // Error: variable already declared
        alert(message);
    ```

- For if, for, while and so on, variables declared in {...} are also only visible inside:

```js
    if (true) {
        let phrase = "Hello!";

        alert(phrase); // Hello!
    }

    alert(phrase); // Error, no such variable!
```

- The similar thing holds true for for and while loops:

```js
    for (let i = 0; i < 3; i++) {
        // the variable i is only visible inside this for
        alert(i); // 0, then 1, then 2
    }

    alert(i); // Error, no such variable
```

- Visually, let i is outside of {...}. But the for construct is special here: the variable, declared inside it, is considered a part of the block.


---


## Nested functions

- A function is called “nested” when it is created inside another function.

- Example:

```js
    function sayHiBye(firstName, lastName) {

        // helper nested function to use below
        function getFullName() {
            return firstName + " " + lastName;
    }

        alert( "Hello, " + getFullName() );
        alert( "Bye, " + getFullName() );

    }
```

- A nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.

- Below, makeCounter creates the “counter” function that returns the next number on each invocation:

```js
    function makeCounter() {
        let count = 0;

        return function() {
            return count++;
        };
    }

    let counter = makeCounter();

    alert( counter() ); // 0
    alert( counter() ); // 1
    alert( counter() ); // 2
```


---


## Lexical Environment

### Step 1. Variables

- In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

- The Lexical Environment object consists of two parts:

    1. **Environment Record** – an object that stores all local variables as its properties (and some other information like the value of this).

    1. A reference to the outer lexical environment, the one associated with the outer code.