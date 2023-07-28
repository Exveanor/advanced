function sortNumbers (arrayOfNums) {

    const sortedNums = arrayOfNums.sort((a,b) => a- b);
    const result = [];

    while(sortedNums.length !== 0) {
        const firstEl = sortedNums.shift();
        const lastEl = sortedNums.pop();
        result.push(firstEl, lastEl);
    }
    return result;
}
sortNumbers ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])