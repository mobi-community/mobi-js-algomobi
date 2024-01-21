/*
설계
1. (sort) 사전순으로 정렬을 해줍니다.
2. (sort) n의 인덱스를 기준으로 아스키 코드를 이용하여 정렬을 해줍니다.
*/

function solution(strings, n) {
    return strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}

console.log(solution(["sun", "bed", "car"], 1))
