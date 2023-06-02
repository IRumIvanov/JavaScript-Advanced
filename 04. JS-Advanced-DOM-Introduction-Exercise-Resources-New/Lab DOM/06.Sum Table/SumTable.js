function sumTable() {
    let prices = document.querySelectorAll('tbody td');
    let sum = document.getElementById('sum');
    let result = +sum.textContent;
    for (let i = 0; i < prices.length - 1; i++) {
        if (i % 2 != 0) {
            let num = prices[i].textContent;
            num = Number(num);
            result += num;
        }
    }
    sum.innerText += result;
    debugger;
}