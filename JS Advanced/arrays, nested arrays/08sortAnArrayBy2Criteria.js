function sortAnArrayBy2Criteria (array) {
    const sortedArr = array.sort((a,b) => {
        const firstCriteria = a.length - b.length;
        const secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria;
    });

    console.log(sortedArr.join("\n"));
}
sortAnArrayBy2Criteria (['alpha',
'beta', 'gamma']);