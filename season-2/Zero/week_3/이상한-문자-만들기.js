/*
해설

짝수 번째 대문자. 홀수번째 소문자로 리턴을 한다.

1. 모든 문자를 분리합니다.
2. 각 문자를 순회하면서 인덱스 번호를 따라 맞는 문자를 리턴합니다.
3. 공백을 무시한 채 대 소문자를 구분한다.
*/

function solution(s) {
    return s.split(' ').map(v => v.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('')).join(' ');
}

console.log(solution("try hello world"))