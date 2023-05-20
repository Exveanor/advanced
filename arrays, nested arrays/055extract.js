function extractIncreasingSubsequence (array) {
    let biggest = Number.MIN_SAFE_INTEGER;

    const output = array.reduce((acc,curr) => {
        if (curr >= biggest) {
            biggest - curr;

            const tempArr = acc;
            tempArr.push(curr);
            return tempArr;
        }

        return acc;
    }, []);
    console.log(output);

}
extractIncreasingSubsequence ([1,
    3,
    8,
    4,10,
    12,
    3,
    2,
    24] )