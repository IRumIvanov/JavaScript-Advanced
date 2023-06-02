function extractText() {
    let list = document.querySelectorAll('ul li');
    let output = document.querySelector('#result');
    for(let node of list) {
        output.value += node.textContent + '\n';
    }
}