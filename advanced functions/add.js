function solution(partialAppliedNum) {
    return function(num) {
        return partialAppliedNum + num;
    }
}

let add5 = solution(5);
console.log(add5(2));