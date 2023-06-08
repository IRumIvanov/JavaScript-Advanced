class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        } else {
            this.warehouseSpace -= spaceRequired;
            this.products.push({
                product: product,
                quantity: quantity
            });
            return `The ${product} has been successfully delivered in the warehouse.`;
        }
    }
    quantityCheck(product, minimalQuantity) {
        let found = this.products.find(el => el.product == product);
        if (!found) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else {
            if (minimalQuantity <= 0) {
                throw new Error(`The quantity cannot be zero or negative.`);
            }
            if (minimalQuantity <= found.quantity) {
                return (`You have enough from product ${product}.`);
            } else {
                let diff = minimalQuantity = found.quantity;
                found.quantity = diff;
                return `You added ${diff} more from the ${product} products.`
            }
        }
    }
    sellProduct(product) {
        let found = this.products.find(el => el.product == product);
        if (!found) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else {
            found.quantity--;
            this.sales.push({
                product: product,
                quantity: 1
            });
            return `The ${product} has been successfully sold.`
        }
    }
    revision() {
        let arrInfo = [];
        if (this.sales.length == 0) {
            throw new Error(`There are no sales today!`);
        } else {
            let total = this.sales.reduce((acc, el) => {
                acc += el.quantity;
                return acc;
            }, 0);
            for (let info of this.products) {
                let productInfo = Object.values(info);
                arrInfo.push(`${productInfo[0]}-${productInfo[1]} more left`);
            }
            return `You sold ${total} products today!\nProducts in the warehouse:\n${arrInfo.join('\n')}`;
        }
    }
}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());