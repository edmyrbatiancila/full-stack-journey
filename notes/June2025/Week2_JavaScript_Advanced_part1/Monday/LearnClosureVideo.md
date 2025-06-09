# [Learn Closures in 7 Minutes by Web Dev Simplified](https://www.youtube.com/watch?v=3a0I8ICR1Vg)

- Example code:
```js
    const myName = 'Edmyr';

    function printName() {
        console.log(myName);
    }

    printName();
```
- Every scopes has an access inside the outer scopes.

- The most common used function used for closure:
```js
    function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
            console.log('Outer Variable: ' + outerVariable);
            console.log('Inner Variable: ' + innerVariable);
        }

    }

    const newFunction = outerFunction('outside');

    newFunction('inside');
```

- When you have a function defined inside of another function, that inner function has access to the variables and scope of the outer function, eventhough that outer function finished everything executed and those variables are no longer accessible outside that function.