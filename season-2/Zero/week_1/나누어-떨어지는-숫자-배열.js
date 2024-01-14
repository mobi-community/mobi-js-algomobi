/*
설계

1. 모든 배열을 순회하여 나누어 떨어지는지 확인한다.
2. 나누어 떨어지면 배열에 담습니다.
3. 정렬을 하여 반환했습니다.

*/

function solution(arr, divisor) {
    var answer = [];

    arr.forEach(element => {
        if (element % divisor === 0) answer.push(element)
    });

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5))