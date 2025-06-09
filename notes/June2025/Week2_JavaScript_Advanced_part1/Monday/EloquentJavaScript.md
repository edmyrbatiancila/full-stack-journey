# [Functions](https://eloquentjavascript.net/03_functions.html)

- Functions are one of the most central tools in JavaScript programming. The concept of wrapping a piece of program in a value has many uses. It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.

## Defining a function

- A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the square of a given number:

```js
    const square = function(x) {
        return x * x;
    };

    console.log(square(12));

    // → 144
```

- A function is created with an expression that starts with the keyword function. Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.

- A function can have multiple parameters or no parameters at all. In the following example, makeNoise does not list any parameter names, whereas roundTo (which rounds n to the nearest multiple of step) lists two:

```js
    const makeNoise = function() {
        console.log("Pling!");
    };

    makeNoise();
    // → Pling!

    const roundTo = function(n, step) {
        let remainder = n % step;
        return n - remainder + (remainder < step / 2 ? 0 : step);
    };

    console.log(roundTo(23, 10));
    // → 20
```

- A return statement determines the value the function returns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. 

- A return keyword without an expression after it will cause the function to return undefined. Functions that don’t have a return statement at all, such as makeNoise, similarly return undefined.

- Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.


---


## Bindings and scopes

- Each binding has a scope, which is the part of the program in which the binding is visible.

- The scope is the whole program—you can refer to such bindings wherever you want. These are called global.

- Bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings.

- Bindings declared with let and const are in fact local to the block in which they are declared, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it.

- In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function in which they appear—or throughout the global scope, if they are not in a function.

```js
    let x = 10;   // global
    if (true) {
        let y = 20; // local to block
        var z = 30; // also global
    }
```

- Each scope can “look out” into the scope around it, so x is visible inside the block in the example. The exception is when multiple bindings have the same name—in that case, code can see only the innermost one. For example, when the code inside the halve function refers to n, it is seeing its own n, not the global n.

```js
    const halve = function(n) {
        return n / 2;
    };

    let n = 10;
    console.log(halve(100));
    // → 50
    console.log(n);
    // → 10
```


---


## Nested scope

- Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.

- For example, this function—which outputs the ingredients needed to make a batch of hummus—has another function inside it:

```js
    const hummus = function(factor) {
        const ingredient = function(amount, unit, name) {
            let ingredientAmount = amount * factor;
            if (ingredientAmount > 1) {
                unit += "s";
            }
            console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1, "can", "chickpeas");
        ingredient(0.25, "cup", "tahini");
        ingredient(0.25, "cup", "lemon juice");
        ingredient(1, "clove", "garlic");
        ingredient(2, "tablespoon", "olive oil");
        ingredient(0.5, "teaspoon", "cumin");
    };
```

- The code inside the ingredient function can see the factor binding from the outer function, but its local bindings, such as unit or ingredientAmount, are not visible in the outer function.

- The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called *lexical scoping*.


---


## Functions as values

- A function binding usually simply acts as a name for a specific piece of the program. Such a binding is defined once and never changed. This makes it easy to confuse the function and its name.

- But the two are different. A function value can do all the things that other values can do—you can use it in arbitrary expressions, not just call it. It is possible to store a function value in a new binding, pass it as an argument to a function, and so on. Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:

```js
    let launchMissiles = function() {
        missileSystem.launch("now");
    };
    if (safeMode) {
        launchMissiles = function() {/* do nothing */};
    }
```


---


## Declaration notation

- There is a slightly shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently:

```js
    function square(x) {
        return x * x;
    }
```

- This is a function declaration. The statement defines the binding square and points it at the given function. It is slightly easier to write and doesn’t require a semicolon after the function.

- There is one subtlety with this form of function definition.

```js
    console.log("The future says:", future());

    function future() {
        return "You'll never have flying cars";
    }
```

- Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems the clearest, without worrying about having to define all functions before they are used.


---


## Arrow Functions

- Instead of the function keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character (not to be confused with the greater-than-or-equal operator, which is written >=):

```js
    const roundTo = (n, step) => {
        let remainder = n % step;
        return n - remainder + (remainder < step / 2 ? 0 : step);
    };
```

- The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.

- When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression rather than a block in braces, that expression will be returned from the function. So, these two definitions of square do the same thing:

```js
    const square1 = (x) => { return x * x; };
    const square2 = x => x * x;
```

- When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

```js
    const horn = () => {
        console.log("Toot");
    };
```

- Arrow functions were added in 2015, mostly to make it possible to write small function expressions in a less verbose way.


---


## The call stack

- The way control flows through functions is somewhat involved. Let’s take a closer look at it. Here is a simple program that makes a few function calls:

```js
    function greet(who) {
        console.log("Hello " + who);
    }
    greet("Harry");
    console.log("Bye");
```

- We could show the flow of control schematically like this:

```js
    not in function
        in greet
            in console.log
        in greet
    not in function
        in console.log
    not in function
```

- The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

- The following code illustrates this by asking the computer a really hard question that causes an infinite back-and-forth between two functions. Or rather, it would be infinite, if the computer had an infinite stack. As it is, we will run out of space, or “blow the stack”.

```js
    function chicken() {
        return egg();
    }
    function egg() {
        return chicken();
    }
    console.log(chicken() + " came first.");
    // → ??
```


---


## Optional Arguments

- The following code is allowed and executes without any problem:

```js
    function square(x) { return x * x; }
    console.log(square(4, true, "hedgehog"));
    // → 16
```

- We defined square with only one parameter. Yet when we call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.

- JavaScript is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters are assigned the value undefined.

- The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And no one will tell you about it. The upside is that you can use this behavior to allow a function to be called with different numbers of arguments. For example, this minus function tries to imitate the - operator by acting on either one or two arguments:

```js
    function minus(a, b) {
        if (b === undefined) return -a;
        else return a - b;
    }

    console.log(minus(10));
    // → -10
    console.log(minus(10, 5));
    // → 5
```

- If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given. For example, this version of roundTo makes its second argument optional. If you don’t provide it or pass the value undefined, it will default to one:

```js
    function roundTo(n, step = 1) {
        let remainder = n % step;
        return n - remainder + (remainder < step / 2 ? 0 : step);
    };

    console.log(roundTo(4.5));
    // → 5
    console.log(roundTo(4.5, 2));
    // → 4
```


---


## Closure

- The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question: What happens to local bindings when the function call that created them is no longer active?

- The following code shows an example of this. It defines a function, wrapValue, that creates a local binding. It then returns a function that accesses and returns this local binding.

```js
    function wrapValue(n) {
        let local = n;
        return () => local;
    }

    let wrap1 = wrapValue(1);
    let wrap2 = wrapValue(2);
    console.log(wrap1());
    // → 1
    console.log(wrap2());
    // → 2
```

- This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure. This behavior not only frees you from having to worry about the lifetimes of bindings but also makes it possible to use function values in some creative ways.

- With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount.

```js
    function multiplier(factor) {
        return number => number * factor;
    }

    let twice = multiplier(2);
    console.log(twice(5));
    // → 10
```

- A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.


---


## Recursion

- It is perfectly okay for a function to call itself, as long as it doesn’t do it so often that it overflows the stack. A function that calls itself is called recursive. Recursion allows some functions to be written in a different style. Take, for example, this power function, which does the same as the ** (exponentiation) operator:

```js
    function power(base, exponent) {
        if (exponent == 0) {
            return 1;
        } else {
            return base * power(base, exponent - 1);
        }
    }

    console.log(power(2, 3));
    // → 8
```

- Running through a simple loop is generally cheaper than calling a function multiple times.

- Therefore, you should generally start by writing something that’s correct and easy to understand. If you’re worried that it’s too slow—which it usually isn’t since most code simply isn’t executed often enough to take any significant amount of time—you can measure afterward and improve it if necessary.

- Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops. Most often these are problems that require exploring or processing several “branches”, each of which might branch out again into even more branches.

- Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

- Here is a recursive solution:

```js
    function findSolution(target) {
        function find(current, history) {
            if (current == target) {
                return history;
            } else if (current > target) {
                return null;
            } else {
                return find(current + 5, `(${history} + 5)`) ??
                    find(current * 3, `(${history} * 3)`);
            }
        }
        return find(1, "1");
    }

    console.log(findSolution(24));
    // → (((1 * 3) + 5) * 3)
```

- The inner function find does the actual recursing. It takes two arguments: the current number and a string that records how we reached this number. If it finds a solution, it returns a string that shows how to get to the target. If it can find no solution starting from this number, it returns null.

- To do this, the function performs one of three actions. If the current number is the target number, the current history is a way to reach that target, so it is returned. If the current number is greater than the target, there’s no sense in further exploring this branch because both adding and multiplying will only make the number bigger, so it returns null. Finally, if we’re still below the target number, the function tries both possible paths that start from the current number by calling itself twice, once for addition and once for multiplication. If the first call returns something that is not null, it is returned. Otherwise, the second call is returned, regardless of whether it produces a string or null.

- To better understand how this function produces the effect we’re looking for, let’s look at all the calls to find that are made when searching for a solution for the number 13:

```js
    find(1, "1")
        find(6, "(1 + 5)")
            find(11, "((1 + 5) + 5)")
                find(16, "(((1 + 5) + 5) + 5)")
                    too big
                find(33, "(((1 + 5) + 5) * 3)")
                    too big
            find(18, "((1 + 5) * 3)")
                too big
        find(3, "(1 * 3)")
            find(8, "((1 * 3) + 5)")
                find(13, "(((1 * 3) + 5) + 5)")
                    found!
```

- The indentation indicates the depth of the call stack. The first time find is called, the function starts by calling itself to explore the solution that starts with (1 + 5). That call will further recurse to explore every continued solution that yields a number less than or equal to the target number. Since it doesn’t find one that hits the target, it returns null back to the first call. There the ?? operator causes the call that explores (1 * 3) to happen. This search has more luck—its first recursive call, through yet another recursive call, hits upon the target number. That innermost call returns a string, and each of the ?? operators in the intermediate calls passes that string along, ultimately returning the solution.


---


## Growing functions

- There are two more or less natural ways for functions to be introduced into programs.

- The first occurs when you find yourself writing similar code multiple times. You’d prefer not to do that, as having more code means more space for mistakes to hide and more material to read for people trying to understand the program. So you take the repeated functionality, find a good name for it, and put it into a function.

- The second way is that you find you need some functionality that you haven’t written yet and that sounds like it deserves its own function. You start by naming the function, and then write its body. You might even start writing code that uses the function before you actually define the function itself.

- We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long:

```js
    007 Cows
    011 Chickens
```

- This asks for a function of two arguments—the number of cows and the number of chickens. Let’s get coding.

```js
    function printFarmInventory(cows, chickens) {
        let cowString = String(cows);
        while (cowString.length < 3) {
            cowString = "0" + cowString;
        }
        console.log(`${cowString} Cows`);
        let chickenString = String(chickens);
        while (chickenString.length < 3) {
            chickenString = "0" + chickenString;
        }
        console.log(`${chickenString} Chickens`);
    }
    printFarmInventory(7, 11);
```

- Writing .length after a string expression will give us the length of that string. Thus, the while loops keep adding zeros in front of the number strings until they are at least three characters long.

- Mission accomplished! But just as we are about to send the farmer the code (along with a hefty invoice), she calls and tells us she’s also started keeping pigs, and couldn’t we please extend the software to also print pigs?

- Here’s a first attempt:

```js
    function printZeroPaddedWithLabel(number, label) {
        let numberString = String(number);
        while (numberString.length < 3) {
            numberString = "0" + numberString;
        }
        console.log(`${numberString} ${label}`);
    }

    function printFarmInventory(cows, chickens, pigs) {
        printZeroPaddedWithLabel(cows, "Cows");
        printZeroPaddedWithLabel(chickens, "Chickens");
        printZeroPaddedWithLabel(pigs, "Pigs");
    }

    printFarmInventory(7, 11, 3);
```

- Instead of lifting out the repeated part of our program wholesale, let’s try to pick out a single concept:

```js
    function zeroPad(number, width) {
        let string = String(number);
        while (string.length < width) {
            string = "0" + string;
        }
        return string;
    }

    function printFarmInventory(cows, chickens, pigs) {
        console.log(`${zeroPad(cows, 3)} Cows`);
        console.log(`${zeroPad(chickens, 3)} Chickens`);
        console.log(`${zeroPad(pigs, 3)} Pigs`);
    }

    printFarmInventory(7, 16, 3);
```

- A useful principle is to refrain from adding cleverness unless you are absolutely sure you’re going to need it. It can be tempting to write general “frameworks” for every bit of functionality you come across. Resist that urge. You won’t get any real work done—you’ll be too busy writing code that you never use.


---


## Functions and side effects

- Functions can be roughly divided into those that are called for their side effects and those that are called for their return value (though it is also possible to both have side effects and return a value).

- Functions that create values are easier to combine in new ways than functions that directly perform side effects.

- A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change.

- A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else).

- A call to such a function can be substituted by its return value without changing the meaning of the code. When you are not sure that a pure function is working correctly, you can test it by simply calling it and know that if it works in that context, it will work in any context. Nonpure functions tend to require more scaffolding to test.