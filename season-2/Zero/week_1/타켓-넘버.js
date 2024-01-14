/*
설계

완전 탐색을 꿈꾼다.
1. 배열의 길이만큼 순회를 하면서 + 또는 -를 해준다.
2. 배열의 길이가 마지막에 다달았을 때 결과를 리턴한다.
3. 값과 일치할 경우 가능한 수가 1 늘어난다.
*/

function solution(numbers, target) {
    var answer = 0;
    function targetNumber(array, index, value, target) {
        if (index === array.length) {
            if (target === value) answer++;
            return;
        }

        targetNumber(array, index + 1, (value + array[index]), target);
        targetNumber(array, index + 1, (value - array[index]), target);
    }

    targetNumber(numbers, 0, 0, target);
    return answer;
}

const example = [[1, 1, 1, 1, 1], 3];

console.log(solution(...example));
