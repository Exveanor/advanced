function solve(area, vol, input) {
    let result = [];
    let objects = JSON.parse(input);
    for (const obj of objects) {
        let areaValue = area.call(obj);
        let volume = vol.call(obj);
        result.push({area: areaValue, volume});
    }
    return result;
}



solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}