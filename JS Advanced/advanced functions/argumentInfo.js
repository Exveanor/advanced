function solve (...args) {
    let obj = {};

    args.forEach((arg) => {
        const typeOfArg = typeof arg;   //because I use it a couple of times
        console.log(`${typeOfArg}: ${arg}`);  //needed for the output
    
    // if it exists +1 counter
        obj[typeOfArg] = obj[typeOfArg] 
        ? (obj[typeOfArg] += 1) 
        : (obj[typeOfArg] = 1);
    });
    // sort
    const sortedInDescOrder = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    // print
    sortedInDescOrder.forEach(([key, value]) => {
        console.log(` ${key} = ${value}`);
    });
}

solve('cat', 42, function () { console.log('Hello world!'); })