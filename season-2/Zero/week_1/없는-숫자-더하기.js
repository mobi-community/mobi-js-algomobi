/*

    설계

    1. (for) 1~9 까지 반복한다.
    2. (push) 없을 경우 배열에 삽입한다.

*/

function solution(numbers) {
    var answer = [];

    Array(9).fill('').forEach((_, ind) => {
        if (!numbers.includes(ind + 1)) answer.push(ind + 1)
    });

    return answer.reduce((a, b) => a + b, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]))