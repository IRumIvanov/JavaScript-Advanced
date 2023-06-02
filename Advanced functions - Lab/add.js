function solution(a) {
    function sol(b) {
        return a + b;
    }
    return sol;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));