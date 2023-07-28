function rotateArray (array, rotation) {
    const collectionOfStr = [...array];
    
    for (let i = 0; i < rotation; i++) {
        let lastNumber = collectionOfStr.pop();
        collectionOfStr.unshift(lastNumber);
        
    }
    console.log(collectionOfStr.join(" "));
}
rotateArray(['1',
'2',
'3',
'4'],
2)