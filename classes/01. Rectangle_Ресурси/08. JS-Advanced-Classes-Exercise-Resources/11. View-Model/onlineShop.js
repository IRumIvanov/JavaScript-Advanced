class OnlineShop {
    constructor(warehouseSpace) {
        this.products = [];
        this.sales = [];
        this.warehouseSpace = warehouseSpace
    }
    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace >= spaceRequired) {
            this.warehouseSpace -= spaceRequired;

            this.products.push({
                product: product,
                quantity: [quantity]
            });
            return `The ${product} has been successfully delivered in the warehouse.`
        }
        if (this.warehouseSpace < spaceRequired) {
            throw 'Not enough space in the warehouse.'
        }
    }

    quantityCheck(product, minimalQuantity) {
        if (!product in this.products) {
            throw 'There is no {product} in the warehouse.'
        } else {
            if (minimalQuantity <= 0) {
                throw 'The quantity cannot be zero or negative.'
            }
            if (minimalQuantity <= this.products[product].quantity) {
                return `You have enough from product ${product}.`
            }
        }
    }
    sellProduct(product) {
        if (!product in this.products) {
            throw `There is no ${product} in the warehouse.`
        } else {
            this.product[quantity].quantity--;
            this.sales.push(this.products[product])
            return `The ${product} has been successfully sold.`
        }
    }
    revision() {
        if (this.sales.length == 0) {
            throw `There are no sales today!`
        } else {
            console.log(`You sold ${sales.length} products today!`);
            console.log(`Products in the warehouse:`)
            for (const [key, value] of Object.entries(this.products)) {
                console.log(`${key}-${value} more left`);
            }
        }
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 50));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));