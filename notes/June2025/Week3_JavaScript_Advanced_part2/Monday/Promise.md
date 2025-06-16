# [Promise](https://javascript.info/promise-basics)

- This is a real-life analogy for things we often have in programming:

    1. A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.

    1. A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.

    1. A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

- The constructor syntax for a promise object is:

```js
    let promise = new Promise(function(resolve, reject) {
        // executor (the producing code, "singer")
    });
```

- The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.

- Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

- When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

    - resolve(value) — if the job is finished successfully, with result value.

    - reject(error) — if an error has occurred, error is the error object.

- So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

- The promise object returned by the new Promise constructor has these internal properties:

    - state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.

    - result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

- Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via setTimeout):

```js
    let promise = new Promise(function(resolve, reject) {
        // the function is executed automatically when the promise is constructed

        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve("done"), 1000);
    });
```

- We can see two things by running the code above:

    1. The executor is called automatically and immediately (by new Promise).

    1. The executor receives two arguments: resolve and reject. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

- And now an example of the executor rejecting the promise with an error:

```js
    let promise = new Promise(function(resolve, reject) {
        // after 1 second signal that the job is finished with an error
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    });
```

- To summarize, the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object.

- A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.

- The executor should call only one resolve or one reject. Any state change is final.

- All further calls of resolve and reject are ignored:

```js
    let promise = new Promise(function(resolve, reject) {
        resolve("done");

        reject(new Error("…")); // ignored
        setTimeout(() => resolve("…")); // ignored
    });
```

- The idea is that a job done by the executor may have only one result or an error.

- Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.


---


## Consumers: then, catch

- A Promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.

### then

- The syntax is:

```js
    promise.then(
        function(result) { /* handle a successful result */ },
        function(error) { /* handle an error */ }
    );
```

- The first argument of .then is a function that runs when the promise is resolved and receives the result.

- The second argument of .then is a function that runs when the promise is rejected and receives the error.

- For instance, here’s a reaction to a successfully resolved promise:

```js
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);
    });

    // resolve runs the first function in .then
    promise.then(
        result => alert(result), // shows "done!" after 1 second
        error => alert(error) // doesn't run
    );
```

- And in the case of a rejection, the second one:

```js
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    });

    // reject runs the second function in .then
    promise.then(
        result => alert(result), // doesn't run
        error => alert(error) // shows "Error: Whoops!" after 1 second
    );
```

### catch

- If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

```js
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    });

    // .catch(f) is the same as promise.then(null, f)
    promise.catch(alert); // shows "Error: Whoops!" after 1 second
``` 

- The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.


---


## Cleanup: finally

- Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.

- The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.

- The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

- The code may look like this:

```js
    new Promise((resolve, reject) => {
        /* do something that takes time, and then call resolve or maybe reject */
    })
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => stop loading indicator)
    // so the loading indicator is always stopped before we go on
    .then(result => show result, err => show error)
``` 

- Please note that finally(f) isn’t exactly an alias of then(f,f) though.

- There are important differences:

    1. A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.

    1. A finally handler “passes through” the result or error to the next suitable handler.

        - For instance, here the result is passed through finally to then:

            ```js
                new Promise((resolve, reject) => {
                    setTimeout(() => resolve("value"), 2000);
                })
                .finally(() => alert("Promise ready")) // triggers first
                .then(result => alert(result)); // <-- .then shows "value"
            ```

        - And here’s an example of an error, for us to see how it’s passed through finally to catch:

            ```js
                new Promise((resolve, reject) => {
                    throw new Error("error");
                })
                .finally(() => alert("Promise ready")) // triggers first
                .catch(err => alert(err));  // <-- .catch shows the error
            ```
    1. A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.

        - The only exception to this rule is when a finally handler throws an error. Then this error goes to the next handler, instead of any previous outcome.

- To summarize:

    - A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.

    - If a finally handler returns something, it’s ignored.

    - When finally throws an error, then the execution goes to the nearest error handler.

- If a promise is pending, .then/catch/finally handlers wait for its outcome.

- Sometimes, it might be that a promise is already settled when we add a handler to it.

- In such case, these handlers just run immediately:

```js
    // the promise becomes resolved immediately upon creation
    let promise = new Promise(resolve => resolve("done!"));

    promise.then(alert); // done! (shows up right now)
```


---


## Example: loadScript

- Here’s the callback-based variant, just to remind us of it:

```js
    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => callback(null, script);
        script.onerror = () => callback(new Error(`Script load error for ${src}`));

        document.head.append(script);
    }
```

- The new function loadScript will not require a callback. Instead, it will create and return a Promise object that resolves when the loading is complete. The outer code can add handlers (subscribing functions) to it using .then:

```js
    function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}
```

- Usage:

```js
    let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

    promise.then(
        script => alert(`${script.src} is loaded!`),
        error => alert(`Error: ${error.message}`)
    );

    promise.then(script => alert('Another handler...'));
```

- **Callbacks**

    - We must have a callback function at our disposal when calling loadScript(script, callback). In other words, we must know what to do with the result before loadScript is called.

    - There can be only one callback.

- **Promises**

    - Promises allow us to do things in the natural order. First, we run loadScript(script), and .then we write what to do with the result.

    - We can call .then on a Promise as many times as we want. Each time, we’re adding a new “fan”, a new subscribing function, to the “subscription list”. More about this in the next chapter: Promises chaining.


---


## Tasks

- What’s the output of the code below?

```js
    let promise = new Promise(function(resolve, reject) {
        resolve(1);

        setTimeout(() => resolve(2), 1000);
    });

    promise.then(alert);
```

- Solution:

    - The output is: 1. The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.

### Delay with a promise

- The built-in function setTimeout uses callbacks. Create a promise-based alternative.

- The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

```js
    function delay(ms) {
        // your code
    }

    delay(3000).then(() => alert('runs after 3 seconds'));
```

- Solution:

```js
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    delay(3000).then(() => alert('runs after 3 seconds'));
```

- Please note that in this task resolve is called without arguments. We don’t return any value from delay, just ensure the delay.

### Animated circle with promise

- Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.

- The new usage:

```js
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
```