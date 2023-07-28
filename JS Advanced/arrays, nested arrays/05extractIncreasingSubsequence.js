function extractIncreasingSubsequence (array) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const output = [];

    for (let i = 0; i < array.length; i++) {
        const currElement = array[i];

        if(currElement >= biggest) {
            output.push(currElement);
            biggest = currElement;
        }
    }
    console.log(output);

}
extractIncreasingSubsequence ([1,3,8,4,10,12,3,2,24] )