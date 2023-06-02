function extract(content) {
    let strings = document.getElementById(content).textContent;
    let regExp = /\(([^)]+)\)/g;
    let matches = strings.matchAll(regExp);
    let words = [];

    for (let text of matches) {
        words.push(text[1])
    }
    return words.join('; ')

}
let result = extract('content');
console.log(result)