function sortListOfNames (listOfNames) {
    const sortedArray = listOfNames.sort((a,b) => a.localeCompare(b));

    sortedArray.forEach((name, index) => console.log(`${index + 1}.${name}`));
}
sortListOfNames (["John",
"Bob",
"Christina",
"Ema"]
)