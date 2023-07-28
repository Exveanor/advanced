function solve(arrayOfNumbers, type) {
    //create dictionary
    const dict = {
        asc: (a,b) => a - b,
        desc: (a,b) => b - a,
    }
    
    const result = arrayOfNumbers.sort(dict[type]);
    return result;
}
 solve([14, 7, 17, 6, 8], 'asc')