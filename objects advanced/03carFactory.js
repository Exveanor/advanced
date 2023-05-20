function carFactory(input) {
    const car = { ...input };
    if(car.power <= 90) {
        delete car.power;
        car.engine = {power: 90, volume: 1800}
    } else if(car.power <= 120) {
        delete car.power;
        car.engine = {power: 120 , volume: 2400}
    } else if(car.power <= 200) {
        delete car.power;
        car.engine = {power: 200, volume: 3500}
    }

    if(car.carriage === "hatchback") {
        car.carriage = { type: "hatchback", color: car.color };
        delete car.color;
    }else if(car.carriage === "coupe") {
        car.carriage = { type: "coupe", color: car.color };
        delete car.color;
    }

    if(car.wheelsize % 2 === 0) {
        let size = car.wheelsize - 1;
        car.wheels = [size, size, size, size];
        delete car.wheelsize;
    }else {
        let size = car.wheelsize;
        car.wheels = [size, size, size, size];
        delete car.wheelsize;
    }
    return car;
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })
