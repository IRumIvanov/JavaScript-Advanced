class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (spaceRequired <= this.spaceAvailable) {
            this.spaceAvailable -= spaceRequired;
            this.plants.push({
                name: plantName,
                space: spaceRequired,
                ripe: false,
                quantity: 0
            });
            return `The ${plantName} has been successfully planted in the garden.`;

        } else {
            throw new Error("Not enough space in the garden.");
        }
    }
    ripenPlant(plantName, quantity) {
        let found = this.plants.find(el => el.name == plantName);
        if (!found) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else {
            if (found.ripe === true) {
                throw new Error(`The ${plantName} is already ripe.`)
            }
            if (quantity <= 0) {
                throw new Error(`The quantity cannot be zero or negative.`);
            }
            found.ripe = true;
            found.quantity += quantity;

            if (found.quantity == 1) {
                return `${quantity} ${plantName} has successfully ripened.`
            }
            if (found.quantity > 1) {
                return `${quantity} ${plantName}s have successfully ripened.`
            }

        }
    }
    harvestPlant(plantName) {
        let found = this.plants.find(el => el.name == plantName);
        if (!found) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } else {
            if (found.ripe == false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
            } else {
                this.storage.push({
                    name: plantName,
                    quantity: found.quantity
                });
                this.spaceAvailable += found.space;
                let index = this.plants.indexOf(found);
                this.plants.splice(index, 1);
                return `The ${plantName} has been successfully harvested.`
            }
        }
    }
    generateReport() {
        let namesPlants = this.plants.map(el => el.name).sort();
        let arrStorage = [];
        if (this.storage == 0) {
            throw new Error("Plants in storage: The storage is empty.");
        } else {

            for (let storage of this.storage) {
                let storagePlants = Object.values(storage);
                arrStorage.push(`${storagePlants[0]} (${storagePlants[1]})`);
            }
        }
        return (
            `The garden has ${ this.spaceAvailable } free space left.\nPlants in the garden: ${namesPlants.join(', ')}\nPlants in storage: ${arrStorage.join(', ')}`
        )
    }
}
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.harvestPlant('apple'));

console.log(myGarden.generateReport());