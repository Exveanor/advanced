function extractIncreasingSubsequence(array) {
    
    return array.reduce((accumulator,current) => {
        if (accumulator.length === 0 || current >= accumulator[accumulator.length -1]) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

}
const result = extractIncreasingSubsequence([20,3, 2, 15, 6, 1]);
console.log(result);
