/*
해설.
최고의 곱을 만들기 위해서는 모든 값들이 최대한 비슷하게 최대 값으로 유지되어야 한다.

ex 10) 4, 3, 3
ex 15) 5, 5, 5

(return) 만약 n이 s보다 클 경우 자연수로는 만들 수 없으므로 -1을 리턴한다.
(while) n 만큼 추출을 하기위해 n이 0이 될 때까지 반복한다.
(Math.round) 매번 n을 s로 나눈다. 
만약 7과 같을 경우 2로 나누면 3.5가 나오기 때문에 4가 나오고 다음 남은 수가 3이 된다.
(sort) 정렬을 해서 요구사항과 같이 정렬을 해서 내보내준다.

*/

function solution(n, s) {
    if (n > s) return [-1]

    let answer = [];

    while (n !== 0) {
        let a = Math.round(s / n)
        answer.push(a)
        s -= a
        n--;
    }

    return answer.sort((a, b) => a - b);
}

console.log(solution(3, 6))