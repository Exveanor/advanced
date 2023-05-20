function cityRecord (name, numberOfPeople, treasury) {
    let object = {
        name,
        population: numberOfPeople,
        treasury,
    }
    return object;

}
console.log(cityRecord('Tortuga', 7000, 15000));