/*

해설
이전에 갔던 곳을 들어가지 못한다.
가장 최고점수의 경우를 골라라.

이전에 갔던 곳을 기억하고 있는다.


다음 수에 접근하기 이전 과거 수들 중 가장 조합할 수 있는 큰 값을 고른다.

[1, 2, 3, 5], 
[5, 6, 7, 8], => [10, 11, 12, 11]
[4, 3, 2, 1], => [16, 15, 14, 12]

=> 결과 16

1. (for) 행만큼 반복을 진행한다.
2. (for) 열만큼 반복을 진행한다.
3. (for) 열만큼 반복을 진행하는데. 이전 열과는 동일하지 않은 만큼 반복한다.
4. (Math.max) 이전 값과 비교하면서 가장 큰 값을 max에 넣어준다.
5. 마지막 행에서 가장 큰 값을 꺼내준다.
*/

function solution(land) {
    const rows = land.length;
    const cols = land[0].length;

    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let max = 0;
            for (let k = 0; k < cols; k++) {
                if (j !== k) {
                    max = Math.max(max, land[i - 1][k]);
                }
            }
            land[i][j] += max;
        }
    }

    return Math.max(...land[rows - 1]);
}

console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]))