function solve(input) {
    let cars = new Map();

    for (let car of input) {
        let [brand, model, number] = car.split(' | ');
        number = +number;
        if (cars.has(brand)) {
            let hasBrand = cars.get(brand);
            let hasModel = hasBrand.get(model);
            if (hasModel) {
                hasModel += number;
                hasBrand.set(model, hasModel);
            } else {
                hasBrand.set(model, number);
            }
        } else {
            const carModel = new Map();
            carModel.set(model, number);
            cars.set(brand, carModel);
        }

    }
    console.log(cars);
    for (let car of cars) {
        console.log(car[0]);
        for (let [model, quantity] of car[1]) {
            console.log(`###${model} -> ${quantity}`)
        }
    }


}
console.log(solve(['Audi | Q7 | 1000',
    // 'Audi | Q6 | 100',
    // 'BMW | X5 | 1000',
    // 'BMW | X6 | 100',
    'Citroen | C4 | 123',
    // 'Volga | GAZ-24 | 1000000',
    // 'Lada | Niva | 1000000',
    // 'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]))