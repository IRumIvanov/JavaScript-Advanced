class Tickets {
    constructor(arr, string) {
        this.arr = arr,
            this.string = string
        this.arrObjects = []
        for (let line of arr) {
            let [destination, price, status] = line.split('|');

            this.arrObjects.push({
                destination: destination,
                price: +price,
                status: status
            })
        }

        return this.arrObjects.sort((a, b) => {
            if (string === "price") {
                return 0;
            } else {
                return a[string].localeCompare(b[string]);
            }
        })
    }
}
let result = new Tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'price');
console.log(result);