# [The old "var"](https://javascript.info/var)

- The var declaration is similar to let. Most of the time we can replace let by var or vice-versa and expect things to work:

```js
    var message = "Hi";
    alert(message); // Hi
```

- But internally var is a very different beast, that originates from very old times. It’s generally not used in modern scripts, but still lurks in the old ones.


---


## “var” has no block scope

-   Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.

- For instance:

```js
    if (true) {
        var test = true; // use "var" instead of "let"
    }

    alert(test); // true, the variable lives after if
```

- As var ignores code blocks, we’ve got a global variable test.

- If we used let test instead of var test, then the variable would only be visible inside if:

```js
    if (true) {
        let test = true; // use "let"
    }

    alert(test); // ReferenceError: test is not defined
```

- The same thing for loops: var cannot be block- or loop-local:

```js
    for (var i = 0; i < 10; i++) {
        var one = 1;
        // ...
    }

    alert(i);   // 10, "i" is visible after loop, it's a global variable
    alert(one); // 1, "one" is visible after loop, it's a global variable
```

- If a code block is inside a function, then var becomes a function-level variable:

```js
    function sayHi() {
        if (true) {
            var phrase = "Hello";
        }

        alert(phrase); // works
    }

    sayHi();
    alert(phrase); // ReferenceError: phrase is not defined
```

- As we can see, var pierces through if, for or other code blocks. That’s because a long time ago in JavaScript, blocks had no Lexical Environments, and var is a remnant of that.


---


## “var” tolerates redeclarations

- If we declare the same variable with let twice in the same scope, that’s an error:

```js
    let user;
    let user; // SyntaxError: 'user' has already been declared
```

- With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:

```js
    var user = "Pete";

    var user = "John"; // this "var" does nothing (already declared)
    // ...it doesn't trigger an error

    alert(user); // John
```


---


## “var” variables can be declared below their use

- var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).

```js
    function sayHi() {
        phrase = "Hello";

        alert(phrase);

        var phrase;
    }

    sayHi();
```

- …Is technically the same as this (moved var phrase above):

```js
    function sayHi() {
        var phrase;

        phrase = "Hello";

        alert(phrase);
    }

    sayHi();
```

- …Or even as this (remember, code blocks are ignored):

```js
    function sayHi() {
        phrase = "Hello"; // (*)

        if (false) {
            var phrase;
        }

        alert(phrase);
    }
    sayHi();
```

- People also call such behavior “hoisting” (raising), because all var are “hoisted” (raised) to the top of the function.

- The var inside it is processed in the beginning of the function, so at the moment of (*) the variable exists.

- **Declarations are hoisted, but assignments are not.**

- That’s best demonstrated with an example:

```js
    function sayHi() {
        alert(phrase);

        var phrase = "Hello";
    }

    sayHi();
```


---


## IIFE

- “immediately-invoked function expressions” (abbreviated as IIFE).

- An IIFE looks like this:

```js
    (function() {

        var message = "Hello";

        alert(message); // Hello

    })();
```

- The Function Expression is wrapped with parenthesis (function {...}), because when JavaScript engine encounters "function" in the main code, it understands it as the start of a Function Declaration. But a Function Declaration must have a name, so this kind of code will give an error:

```js
    // Tries to declare and immediately call a function
    function() { // <-- SyntaxError: Function statements require a function name

        var message = "Hello";

        alert(message); // Hello

    }();
```

- So, the parentheses around the function is a trick to show JavaScript that the function is created in the context of another expression, and hence it’s a Function Expression: it needs no name and can be called immediately.

- There exist other ways besides parentheses to tell JavaScript that we mean a Function Expression:

```js
    // Ways to create IIFE

    (function() {
        alert("Parentheses around the function");
    })();

    (function() {
        alert("Parentheses around the whole thing");
    }());

    !function() {
        alert("Bitwise NOT operator starts the expression");
    }();

    +function() {
        alert("Unary plus starts the expression");
    }();
```