let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("remote response")
    }, 1000)
});

console.log(promise);
promise.then(x => console.log(x)).catch(e => console.log(e));  //then takes result from resolve. 