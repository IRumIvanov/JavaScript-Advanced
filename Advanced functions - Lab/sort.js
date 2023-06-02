function sort(arr,command) {

    let func = {
        asc: () => arr.sort((a,b) => a - b),
        desc: () => arr.sort((a,b) => b - a)
    }
    
    return  func[command].call(this, arr);
    
}

console.log(sort([14, 7, 17, 6, 8], 'asc'))