# [Promise API](https://javascript.info/promise-api)

- There are 6 static methods in the Promise class. We’ll quickly cover their use cases here.


---


## Promise.all

- The syntax is:

```js
    let promise = Promise.all(iterable);
```

- Promise.all takes an iterable (usually, an array of promises) and returns a new promise.

- The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

- For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:

```js
    Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
        new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
        new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
    ]).then(alert);
```

- A bigger example with fetching user information for an array of GitHub users by their names (we could fetch an array of goods by their ids, the logic is identical):

```js
    let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));
```

- If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.

```js
    Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).catch(alert); // Error: Whoops!
```

- Here the second promise rejects in two seconds. That leads to an immediate rejection of Promise.all, so .catch executes: the rejection error becomes the outcome of the entire Promise.all.

- If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

- Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s passed to the resulting array “as is”.

- For instance, here the results are [1, 2, 3]:

```js
    Promise.all([
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 1000)
        }),
        2,
        3
    ]).then(alert); // 1, 2, 3
```


---


## Promise.allSettled

- Promise.all rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results successful to proceed:

```js
    Promise.all([
        fetch('/template.html'),
        fetch('/style.css'),
        fetch('/data.json')
    ]).then(render); // render method needs results of all fetches
```

- Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:

    - {status:"fulfilled", value:result} for successful responses,

    - {status:"rejected", reason:error} for errors.

- For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.

- Example:

```js
    let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://no-such-url'
    ];

    Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
        if (result.status == "fulfilled") {
            alert(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
            alert(`${urls[num]}: ${result.reason}`);
        }
        });
    });
```

- The results in the line (*) above will be:

```js
    [
    {status: 'fulfilled', value: ...response...},
    {status: 'fulfilled', value: ...response...},
    {status: 'rejected', reason: ...error object...}
    ]
```


---


## Polyfill

- If the browser doesn’t support Promise.allSettled, it’s easy to polyfill:

```js
    if (!Promise.allSettled) {
        const rejectHandler = reason => ({ status: 'rejected', reason });

        const resolveHandler = value => ({ status: 'fulfilled', value });

        Promise.allSettled = function (promises) {
            const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
            return Promise.all(convertedPromises);
        };
    }
```

- In this code, promises.map takes input values, turns them into promises (just in case a non-promise was passed) with p => Promise.resolve(p), and then adds .then handler to every one.


---


## Promise.race

- Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

- The syntax is:

```js
    let promise = Promise.race(iterable);
```

- For instance, here the result will be 1:

```js
    Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).then(alert); // 1
```

- The first promise here was fastest, so it became the result. After the first settled promise “wins the race”, all further results/errors are ignored.


---


## Promise.any

- Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

- The syntax is:

```js
    let promise = Promise.any(iterable);
```

- For instance, here the result will be 1:

```js
    Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).then(alert); // 1
```

- Here’s an example when all promises fail:

```js
    Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
    ]).catch(error => {
        console.log(error.constructor.name); // AggregateError
        console.log(error.errors[0]); // Error: Ouch!
        console.log(error.errors[1]); // Error: Error!
    });
```


---


## Promise.resolve/reject

- Methods Promise.resolve and Promise.reject are rarely needed in modern code, because async/await syntax (we’ll cover it a bit later) makes them somewhat obsolete.

### Promise.resolve

- Promise.resolve(value) creates a resolved promise with the result value.

- For example, the loadCached function below fetches a URL and remembers (caches) its content. For future calls with the same URL it immediately gets the previous content from cache, but uses Promise.resolve to make a promise of it, so the returned value is always a promise:

```js
    let cache = new Map();

function loadCached(url) {
    if (cache.has(url)) {
        return Promise.resolve(cache.get(url)); // (*)
    }

    return fetch(url)
        .then(response => response.text())
        .then(text => {
        cache.set(url,text);
        return text;
        });
    }
```

- We can write loadCached(url).then(…), because the function is guaranteed to return a promise. We can always use .then after loadCached. That’s the purpose of Promise.resolve in the line (*).


---


## Promise.reject

- Promise.reject(error) creates a rejected promise with error.

- Same as:

```js
    let promise = new Promise((resolve, reject) => reject(error));
```