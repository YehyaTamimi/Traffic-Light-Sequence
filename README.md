# Traffic-Light-Sequence

# What is a callback function in JavaScript?

A callback function is a function passed as an argument inside another function. It's used asynchronously in JavaScript by passing it as an argument for functions waiting for an event to occur or a result obtained. This allows the callback function to be called only when the event happens without blocking other functionalities.

# Why are callbacks important in asynchronous programming?

callbacks are important because they provide non-blocking functionalites in js, this allows the application to continue running while the callback function is waiting for an event or a result in the background so it can be invoked. this is especially important when dealing with operations that might take a lot of time to complete.

# How do you define and pass a callback function to another function?

### we can write the callback function seperately and pass it to the other function as folllows: 

```
const callbackFunction = () =>{
    //some code
}

const callingFunction = (callback) => {
    callback();
}

callingFunction(callBackFunction);
```

### we can also write the callback function directly inisde the calling functions arguments as follows: 

```
const callingFunction = (callback) => {
    callback();
}

callingFunction(() => {
    //some code
});
```

# Explain the difference between synchronous and asynchronous callbacks

* synchronous callbacks get executed immediately inside the function that calls them, and they block execution of subsequent code inisde the calling function untill they are finished executing.

* asynchronous callbacks are executed later, after an event occurs or a result is recieved inside the calling function, and they dont block the execution of subsequent code inside the calling function, allowing the application to keep running.

# What is the "callback hell" problem, and how can it be mitigated?

"callback hell" is a term given to a situation where many asynchronous callback functions are nested inside each other, making the code harder to read, debug and maintain. 

there are several ways to mitigate "callback hell", some of these are: 

1. split the callbacks into modular functions that have specific functionalities and handle single asynchrouns tasks.
2. use comments and named functions as they might give more clarification and make the code more readable. 
3. use Promises as they provided a structured way to handle asynchronous operations that creates a linear flow of code instead of a nested one.
4. use Async/await. they are just syntactic suger added on top of Promises that makes asynchrononus code look more synchronous which makes them easier to understand. 