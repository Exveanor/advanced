function heroicInventory (input) {
    const result = [];

    input.forEach((string) => {
        const obj = {};
        const heroDataArray = string.split(' / ');
        obj.name = heroDataArray[0];
        obj.level = Number(heroDataArray[1]);
        let items = heroDataArray[2];
        obj.items = items ? items.split(', ') : [];

        result.push(obj);
    });

    return JSON.stringify(result);
    
}