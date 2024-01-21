/*
설계

1. 중복된 숫자를 모두 제거합니다.
2. 각 숫자 인덱스 마다 더하기를 반복하여 answer에 넣습니다.
3. 중복된 숫자를 모두 제거합니다.
4. 정렬을 하여 내보냅니다.

*/

function solution(numbers) {
    var answer = [];
    numbers.forEach((val, ind) => {
        for (let i = ind + 1; i < numbers.length; i++) {
            answer.push(val + numbers[i]);
        }
    });
    return [...new Set(answer)].sort()
}

console.log(solution([2, 1, 3, 4, 1]));
