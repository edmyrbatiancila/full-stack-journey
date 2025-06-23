# [Promises chaining](https://javascript.info/promise-chaining)

- Example:

```js
    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000); // (*)

    }).then(function(result) { // (**)

        alert(result); // 1
        return result * 2;

    }).then(function(result) { // (***)

        alert(result); // 2
        return result * 2;

    }).then(function(result) {

        alert(result); // 4
        return result * 2;

    });
```

- The idea is that the result is passed through the chain of .then handlers.

- Here the flow is:

    1. The initial promise resolves in 1 second (*),

    1. Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).

    1. The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.

    1. …and so on.

- As the result is passed along the chain of handlers, we can see a sequence of alert calls: 1 → 2 → 4.

- The whole thing works, because every call to a .then returns a new promise, so that we can call the next .then on it.

- When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

- A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

- For example:

```js
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    });

    promise.then(function(result) {
        alert(result); // 1
        return result * 2;
    });

    promise.then(function(result) {
        alert(result); // 1
        return result * 2;
    });

    promise.then(function(result) {
        alert(result); // 1
        return result * 2;
    });
```

- All .then on the same promise get the same result – the result of that promise. So in the code above all alert show the same: 1.

- In practice we rarely need multiple handlers for one promise. Chaining is used much more often.


---


## Returning promises

- A handler, used in .then(handler) may create and return a promise.

- For instance:

```js
    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000);

    }).then(function(result) {

        alert(result); // 1

        return new Promise((resolve, reject) => { // (*)
            setTimeout(() => resolve(result * 2), 1000);
        });

    }).then(function(result) { // (**)

        alert(result); // 2

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });

    }).then(function(result) {

        alert(result); // 4

    });
```

- Here the first .then shows 1 and returns new Promise(…) in the line (*). After one second it resolves, and the result (the argument of resolve, here it’s result * 2) is passed on to the handler of the second .then. That handler is in the line (**), it shows 2 and does the same thing.

- Returning promises allows us to build chains of asynchronous actions.


---


## Example: loadScript

- Let’s use this feature with the promisified loadScript, defined in the previous chapter, to load scripts one by one, in sequence:

```js
    loadScript("/article/promise-chaining/one.js")
    .then(function(script) {
        return loadScript("/article/promise-chaining/two.js");
    })
    .then(function(script) {
        return loadScript("/article/promise-chaining/three.js");
    })
    .then(function(script) {
        // use functions declared in scripts
        // to show that they indeed loaded
        one();
        two();
        three();
    });
```

- This code can be made bit shorter with arrow functions:

```js
    loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
        // scripts are loaded, we can use functions declared there
        one();
        two();
        three();
    });
```

- Here each loadScript call returns a promise, and the next .then runs when it resolves. Then it initiates the loading of the next script. So scripts are loaded one after another.

- Technically, we could add .then directly to each loadScript, like this:

```js
    loadScript("/article/promise-chaining/one.js").then(script1 => {
        loadScript("/article/promise-chaining/two.js").then(script2 => {
            loadScript("/article/promise-chaining/three.js").then(script3 => {
                // this function has access to variables script1, script2 and script3
                one();
                two();
                three();
            });
        });
    });
```

- To be precise, a handler may return not exactly a promise, but a so-called “thenable” object – an arbitrary object that has a method .then. It will be treated the same way as a promise.

- The idea is that 3rd-party libraries may implement “promise-compatible” objects of their own. They can have an extended set of methods, but also be compatible with native promises, because they implement .then.

- Here’s an example of a thenable object:

```js
    class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve); // function() { native code }
        // resolve with this.num*2 after the 1 second
        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
    }

    new Promise(resolve => resolve(1))
        .then(result => {
            return new Thenable(result); // (*)
        })
    .then(alert); // shows 2 after 1000ms
```

- JavaScript checks the object returned by the .then handler in line (*): if it has a callable method named then, then it calls that method providing native functions resolve, reject as arguments (similar to an executor) and waits until one of them is called. In the example above resolve(2) is called after 1 second (**). Then the result is passed further down the chain.


---


## Bigger example: fetch

- To read the full response, we should call the method response.text(): it returns a promise that resolves when the full text is downloaded from the remote server, with that text as a result.