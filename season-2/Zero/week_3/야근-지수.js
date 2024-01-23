/*
해설

모든 수를 돌면서 가장 적은 수들만으로 구성된 배열을 만들어 내는 프로그램을 원한다.

1. 0이 됐을 경우 해당 숫자는 지운다.
2. 이전 값과 비교를 하여 해당 값이 이전 값이 더 크다면 다음 화살표는 이전 배열 값을 가리킨다.
[1, 2, 3, 4] => 3번 반복 1, 2, 3, 3 => 1, 2, 3, 2, => 1, 2, 2, 2
3. 모든 수를 제곱하여 점수를 나타낸다.
*/


function solution(n, works) {
    // 1.
    works.sort((a, b) => a - b)


    let selectIndex = works.length - 1
    // 2.
    Array.from({ length: n }).forEach(() => {
        works[selectIndex] = works[selectIndex] - 1

        if (works[selectIndex] === 0) { works.pop() }
        // 이전 값이 있을 경우 비교를 한다.
        // 이전 값이 있고 현재 값 보다 클 경우 다음 삭제는 이전 값으로 선택한다.
        if (works[selectIndex - 1] && works[selectIndex] < works[selectIndex - 1]) {
            selectIndex -= 1
            // 이전 값이 없거나 다음 이전 값이 더 작다면 가장 큰 값에서 제외한다.
        } else {
            selectIndex = works.length - 1
        }

    })
    // 3
    return works.reduce((a, b) => a + b ** 2, 0)
}

console.log(solution(4, [1, 1]))