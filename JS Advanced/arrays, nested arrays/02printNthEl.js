function printNthElement (array, step) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if(i % step === 0) {
            output.push(element);
        }
    }

    return output;

}
printNthElement(['5',
'20',
'31',
'4',
'20'],
2)