function addAndRemoveElements (array) {
    let num = 1;
    let result = [];

    array.forEach((cmd) => {
        if(cmd === "add") {
            result.push(num)
        } else {
            result.pop();
        }
        num+=1;
    });

    const output = result.length >= 1 ? result.join('\n') : "Empty";
    console.log(output);

} 
addAndRemoveElements(['add',
'add',
'add',
'add']
)