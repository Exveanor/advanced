function fruit (fruit, grams, price) {
    let weightInKg = Number(grams) / 1000;
    let costPerKg = weightInKg * Number(price);


    console.log(`I need $${costPerKg.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)