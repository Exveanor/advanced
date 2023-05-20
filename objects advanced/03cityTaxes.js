function cityRecord (name, numberOfPeople, treasury) {
    let object = {
        name,
        population: numberOfPeople,
        treasury,
        taxRate : 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percent) {
            this.population += this.population * percent / 100;
        },
        applyRecession(percent) {
            this.treasury -= this.treasury * percent / 100;
        }
    }
    return object;

}
let city = cityRecord('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city);
city.applyGrowth(5);
console.log(city);
city.applyRecession(10);
console.log(city);